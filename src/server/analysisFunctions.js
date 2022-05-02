export default {
  'rms': (array) => {
    // computes rms energy of a frame array
    let energy = 0;
    for (let i = 0; i < array.length; i++) {
      energy += Math.pow(array[i], 2);
    }
    energy /= array.length;
    energy = Math.sqrt(energy);
    return energy;
  },
  'zeroCrossingRate': (array) => {
    // Computes the zero-crossing rate of a frame array
    let zcr = 0;
    let prev;
    let curr = array[0];
    for (let i = 0; i < array.length - 1; i++) {
      prev = curr;
      curr = array[i + 1];
      if (prev * curr < 0) { zcr++ };
    }
    zcr = zcr / (array.length - 1);
  }
}