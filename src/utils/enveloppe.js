import decibelToLinear from "../math/decibelToLinear";

export default class Enveloppe {
  constructor(targetParam, duration, breakpoints){
    this.targetParam = targetParam;
    this.duration = duration;
    this.breakpoints = breakpoints;
  }

  test(startTime) {
    this.targetParam.setValueAtTime(0, startTime);
    this.targetParam.linearRampToValueAtTime(1, startTime+3);
  }

  apply(startTime) {
    let prevTimeNT = this.breakpoints[0][0];
    let prevVal = this.breakpoints[0][1];
    this.targetParam.setValueAtTime(decibelToLinear(prevVal), startTime);
    for (let bp = 1; bp < this.breakpoints.length; bp++) {
      const [endTimeNT, targetVal, curve] = this.breakpoints[bp]; 
      //endTime is normalized wrt to total duration of enveloppe and relative to start time
      //NT suffix refers to "normalized time"
      //All calculations for curve are made in normalized time

      const [prevTimeNT, prevVal, prevCurve] = this.breakpoints[bp-1]; 
      
      if (Math.abs(curve) < 0.005) {
        console.log(targetVal, decibelToLinear(targetVal), startTime + endTimeNT * this.duration);
        this.targetParam.linearRampToValueAtTime(decibelToLinear(targetVal), startTime + endTimeNT*this.duration);
      }
      else if (curve > 0) { 
        //recreating max/msp's curve~. see https://cycling74.com/forums/math-behind-function-curve
        const transDurNT = endTimeNT-prevTimeNT;
        let currTimeNT = prevTimeNT;
        const stepRealTime = 0.1  //Doing linear approximation of the curve with this step (in seconds of real time) 
        const timeIncrementNT = stepRealTime/this.duration;
        while (endTimeNT-currTimeNT > timeIncrementNT) {
          currTimeNT += timeIncrementNT;
          const gx = (currTimeNT - prevTimeNT)/transDurNT;
          const hp = Math.pow((curve + 1e-20) * 1.2, 0.41)*0.91;
          const fp = hp / (1.0 - hp);
          const gp = (Math.exp(fp * gx) - 1.0) / (Math.exp(fp) - 1.0);
          const val = prevVal + gp * (targetVal-prevVal);

          this.targetParam.linearRampToValueAtTime(decibelToLinear(val), startTime + currTimeNT*this.duration);
        }
        //Last step
        this.targetParam.linearRampToValueAtTime(decibelToLinear(targetVal), startTime + endTimeNT*this.duration);
      } else {
        const transDurNT = endTimeNT-prevTimeNT;
        let currTimeNT = prevTimeNT;
        const stepRealTime = 0.1  //Doing linear approximation of the curve with this step (in seconds of real time) 
        const timeIncrementNT = stepRealTime/this.duration;
        while (endTimeNT-currTimeNT > timeIncrementNT) {
          currTimeNT += timeIncrementNT;
          const gx = (endTimeNT - currTimeNT)/transDurNT;
          const hp = Math.pow((1e-20 - curve) * 1.2, 0.41) * 0.91;
          const fp = hp / (1.0 - hp);
          const gp = (Math.exp(fp * gx) - 1.0) / (Math.exp(fp) - 1.0);
          const val = targetVal - gp*(targetVal-prevVal);
          
          this.targetParam.linearRampToValueAtTime(decibelToLinear(val), startTime + currTimeNT*this.duration);
        }
        //Last step
        this.targetParam.linearRampToValueAtTime(decibelToLinear(targetVal), startTime + endTimeNT*this.duration);
      }
    }
  }
}
