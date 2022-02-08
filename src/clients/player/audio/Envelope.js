export default class Envelope {
  constructor(targetParam, breakpoints, duration) {
    this.targetParam = targetParam;
    this.breakpoints = breakpoints; // breakpoints are defined with noramlized positions
    this.duration = duration;
  }

  // NT suffix refers to "normalized time"
  // All calculations for curve are made in normalized time
  // endTime is normalized wrt to total duration of enveloppe and relative to start time

  // review, compute things in constructor and just apply ramps there
  apply(startTime, stepRealTime = 0.1) {
    let prevTimeNT = this.breakpoints[0][0];
    let prevVal = this.breakpoints[0][1];

    this.targetParam.setValueAtTime(prevVal, startTime);

    for (let i = 1; i < this.breakpoints.length; i++) {
      let [endTimeNT, targetVal, curve] = this.breakpoints[i];
      let [prevTimeNT, prevVal, prevCurve] = this.breakpoints[i - 1];
      
      // do not resample small curves
      if (Math.abs(curve) < 0.005) {
        this.targetParam.linearRampToValueAtTime(targetVal, startTime + endTimeNT * this.duration);

      // else approximate max/msp's curve~ with ramps
      // see https://cycling74.com/forums/math-behind-function-curve
      // these constants there looks quite insane, no?
      } else if (curve > 0) {
        const transDurNT = endTimeNT - prevTimeNT;
        let currTimeNT = prevTimeNT;
        // do linear approximation of the curve with this step (in seconds of real time)
        const timeIncrementNT = stepRealTime / this.duration;

        while (endTimeNT - currTimeNT > timeIncrementNT) {
          currTimeNT += timeIncrementNT;
          const gx = (currTimeNT - prevTimeNT) / transDurNT;
          const hp = Math.pow((curve + 1e-20) * 1.2, 0.41) * 0.91;
          const fp = hp / (1.0 - hp);
          const gp = (Math.exp(fp * gx) - 1.0) / (Math.exp(fp) - 1.0);
          let val = prevVal + gp * (targetVal - prevVal);

          this.targetParam.linearRampToValueAtTime(val, startTime + currTimeNT * this.duration);
        }

        this.targetParam.linearRampToValueAtTime(targetVal, startTime + endTimeNT * this.duration);

      } else {
        const transDurNT = endTimeNT - prevTimeNT;
        let currTimeNT = prevTimeNT;
        // do linear approximation of the curve with this step (in seconds of real time)
        const timeIncrementNT = stepRealTime / this.duration;

        while (endTimeNT - currTimeNT > timeIncrementNT) {
          currTimeNT += timeIncrementNT;
          const gx = (endTimeNT - currTimeNT)/transDurNT;
          const hp = Math.pow((1e-20 - curve) * 1.2, 0.41) * 0.91;
          const fp = hp / (1.0 - hp);
          const gp = (Math.exp(fp * gx) - 1.0) / (Math.exp(fp) - 1.0);
          const val = targetVal - gp*(targetVal-prevVal);
          
          this.targetParam.linearRampToValueAtTime(val, startTime + currTimeNT * this.duration);
        }

        this.targetParam.linearRampToValueAtTime(targetVal, startTime + endTimeNT * this.duration);
      }
    }
  }
}
