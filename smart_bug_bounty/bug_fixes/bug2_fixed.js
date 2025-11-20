function weightedAverage(values, weights) {
  if (!Array.isArray(values) || !Array.isArray(weights)) {
    throw new TypeError("values and weights must be arrays");
  }
  if (values.length !== weights.length || values.length === 0) {
    return NaN;
  }
  const num = values.reduce((acc, v, i) => acc + v * weights[i], 0);
  const den = weights.reduce((a, b) => a + b, 0);
  if (den === 0) return NaN; // why: avoid division by zero
  return num / den;
}

console.log("Weighted avg:", weightedAverage([10, 20, 30], [1, 1, 8]).toFixed(1)); // 27.0