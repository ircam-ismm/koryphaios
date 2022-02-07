export default function linearToDecibel(val) {
  return 8.685889638065035 * Math.log(val); // 20 * log10(val);
}
