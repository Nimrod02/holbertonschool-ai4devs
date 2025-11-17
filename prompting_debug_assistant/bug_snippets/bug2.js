function weightedAverage(values, weights) {
  if (values.length !== weights.length || values.length === 0) {
    return NaN;
  }
  // BUG: renvoie somme(weights)/values.length au lieu de sum(v*w)/sum(w)
  const sumWeights = weights.reduce((a, b) => a + b, 0);
  const wrong = sumWeights / values.length; // <- logique cassée
  return wrong;
}

console.log(
  "weightedAverage([10, 20, 30],[1, 1, 8]) =",
  weightedAverage([10, 20, 30], [1, 1, 8])
);
