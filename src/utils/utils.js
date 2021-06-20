// export const compose =
//   (...fns) =>
//   (x) =>
//     fns.reduceRight((y, f) => f(y), x);

export const curry =
  (f, arr = []) =>
  (...args) =>
    ((a) => (a.length === f.length ? f(...a) : curry(f, a)))([...arr, ...args]);

const alphaSequqnce = (() => {
  let i = 97;
  const seq = [];
  while (i < 123) {
    seq.push(`${String.fromCharCode(i)}. `);
    i++;
  }
  return seq;
})();

export const getAlphaSequence = (index) => alphaSequqnce[index];
