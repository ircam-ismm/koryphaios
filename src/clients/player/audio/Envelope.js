export default class Envelope {
  constructor(targetParam, breakpoints, duration, resamplingPeriod = 0.1) {
    this.targetParam = targetParam;

    // compute curve points
    // - all calculations for curves are made in normalized time
    // - timestamps are then stored according to duration, stored positions
    // will be offset by `startTime` when applying the curve
    this.breakpoints = []; // array of [value, position]

    let prevPositionNorm = breakpoints[0][0];
    let prevValue = breakpoints[0][1];

    this.breakpoints.push([prevValue, prevPositionNorm * duration]);

    for (let i = 1; i < breakpoints.length; i++) {
      let [nextPositionNorm, nextValue, curve] = breakpoints[i];
      let [prevPositionNorm, prevValue, prevCurve] = breakpoints[i - 1];

      // approximate very small curves to linear ramps
      if (Math.abs(curve) < 0.005) {
        this.breakpoints.push([nextValue, nextPositionNorm * duration]);

      // else approximate max/msp's curve~ with ramps
      // see https://cycling74.com/forums/math-behind-function-curve
      // these constants there looks quite insane, no?
      } else if (curve > 0) {
        const transitionDurationNorm = nextPositionNorm - prevPositionNorm;
        let currentPositionNorm = prevPositionNorm;
        // do linear approximation of the curve with this step (in seconds of real time)
        const resamplingPeriodNorm = resamplingPeriod / duration;

        while (nextPositionNorm - currentPositionNorm > resamplingPeriodNorm) {
          currentPositionNorm += resamplingPeriodNorm;
          const gx = (currentPositionNorm - prevPositionNorm) / transitionDurationNorm;
          const hp = Math.pow((curve + 1e-20) * 1.2, 0.41) * 0.91;
          const fp = hp / (1.0 - hp);
          const gp = (Math.exp(fp * gx) - 1.0) / (Math.exp(fp) - 1.0);
          let val = prevValue + gp * (nextValue - prevValue);

          this.breakpoints.push([val, currentPositionNorm * duration]);
        }

        this.breakpoints.push([nextValue, nextPositionNorm * duration]);

      } else {
        const transitionDurationNorm = nextPositionNorm - prevPositionNorm;
        let currentPositionNorm = prevPositionNorm;
        // do linear approximation of the curve with this step (in seconds of real time)
        const resamplingPeriodNorm = resamplingPeriod / duration;

        while (nextPositionNorm - currentPositionNorm > resamplingPeriodNorm) {
          currentPositionNorm += resamplingPeriodNorm;
          const gx = (nextPositionNorm - currentPositionNorm) / transitionDurationNorm;
          const hp = Math.pow((1e-20 - curve) * 1.2, 0.41) * 0.91;
          const fp = hp / (1.0 - hp);
          const gp = (Math.exp(fp * gx) - 1.0) / (Math.exp(fp) - 1.0);
          const val = nextValue - gp * (nextValue - prevValue);

          this.breakpoints.push([val, currentPositionNorm * duration]);
        }

        this.breakpoints.push([nextValue, nextPositionNorm * duration]);
      }
    }
  }

  // review, compute things in constructor and just apply ramps there
  apply(startTime) {
    let [value, position] = this.breakpoints.shift();
    this.targetParam.setValueAtTime(value, startTime);

    this.breakpoints.forEach(point => {
      let [value, position] = point;
      this.targetParam.linearRampToValueAtTime(value, startTime + position);
    });
  }
}
