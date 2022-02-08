import decibelToLinear from "../math/decibelToLinear";

export default class Enveloppe {
  constructor(targetParam, duration, breakpoints, inDb = false){
    this.targetParam = targetParam;
    this.duration = duration;
    this.breakpoints = breakpoints;
    this.inDb = inDb;
  }

  test(startTime) {
    this.targetParam.setValueAtTime(0, startTime);
    this.targetParam.linearRampToValueAtTime(1, startTime+3);
  }

  apply(startTime, stepRealTime = 0.1) {
    let prevTimeNT = this.breakpoints[0][0];
    let prevVal = this.breakpoints[0][1];
    prevVal = this.inDb ? decibelToLinear(prevVal) : prevVal;
    this.targetParam.setValueAtTime(prevVal, startTime);
    for (let bp = 1; bp < this.breakpoints.length; bp++) {
      let [endTimeNT, targetVal, curve] = this.breakpoints[bp]; 
      //endTime is normalized wrt to total duration of enveloppe and relative to start time
      //NT suffix refers to "normalized time"
      //All calculations for curve are made in normalized time

      let [prevTimeNT, prevVal, prevCurve] = this.breakpoints[bp-1]; 
      
      if (Math.abs(curve) < 0.005) {
        targetVal = this.inDb ? decibelToLinear(targetVal) : targetVal;
        this.targetParam.linearRampToValueAtTime(targetVal, startTime + endTimeNT*this.duration);
      }
      else if (curve > 0) { 
        //recreating max/msp's curve~. see https://cycling74.com/forums/math-behind-function-curve
        const transDurNT = endTimeNT-prevTimeNT;
        let currTimeNT = prevTimeNT;
        // const stepRealTime = 0.1  //Doing linear approximation of the curve with this step (in seconds of real time) 
        const timeIncrementNT = stepRealTime/this.duration;
        while (endTimeNT-currTimeNT > timeIncrementNT) {
          currTimeNT += timeIncrementNT;
          const gx = (currTimeNT - prevTimeNT)/transDurNT;
          const hp = Math.pow((curve + 1e-20) * 1.2, 0.41)*0.91;
          const fp = hp / (1.0 - hp);
          const gp = (Math.exp(fp * gx) - 1.0) / (Math.exp(fp) - 1.0);
          let val = prevVal + gp * (targetVal-prevVal);

          val = this.inDb ? decibelToLinear(val) : val;
          this.targetParam.linearRampToValueAtTime(val, startTime + currTimeNT*this.duration);
        }
        //Last step
        targetVal = this.inDb ? decibelToLinear(targetVal) : targetVal;
        this.targetParam.linearRampToValueAtTime(targetVal, startTime + endTimeNT*this.duration);
      } else {
        const transDurNT = endTimeNT-prevTimeNT;
        let currTimeNT = prevTimeNT;
        // const stepRealTime = 0.1  //Doing linear approximation of the curve with this step (in seconds of real time) 
        const timeIncrementNT = stepRealTime/this.duration;
        while (endTimeNT-currTimeNT > timeIncrementNT) {
          currTimeNT += timeIncrementNT;
          const gx = (endTimeNT - currTimeNT)/transDurNT;
          const hp = Math.pow((1e-20 - curve) * 1.2, 0.41) * 0.91;
          const fp = hp / (1.0 - hp);
          const gp = (Math.exp(fp * gx) - 1.0) / (Math.exp(fp) - 1.0);
          const val = targetVal - gp*(targetVal-prevVal);
          
          val = this.inDb ? decibelToLinear(val) : val;
          this.targetParam.linearRampToValueAtTime(val, startTime + currTimeNT*this.duration);
        }
        //Last step
        targetVal = this.inDb ? decibelToLinear(targetVal) : targetVal;
        this.targetParam.linearRampToValueAtTime(targetVal, startTime + endTimeNT*this.duration);
      }
    }
  }
}