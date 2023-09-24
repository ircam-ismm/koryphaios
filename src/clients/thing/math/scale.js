export default function scale(minIn, maxIn, minOut, maxOut) {
  const a = (maxOut - minOut) / (maxIn - minIn);
  const b = minOut - a * minIn;
  return x => a * x + b;
};
