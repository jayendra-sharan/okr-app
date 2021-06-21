// export const compose =
//   (...fns) =>
//   (x) =>
//     fns.reduceRight((y, f) => f(y), x);

import { displayPropertyMap } from "./constants";

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

const isUndefined = (obj) => obj === undefined;
const isNull = (obj) => obj === null;
const isEmpty = (obj) => Object.keys(obj) === 0;

export const isNullOrEmpty = (obj) =>
  isUndefined(obj) || isNull(obj) || isEmpty(obj);

const isADisplayProperty = (key) => {
  const displayProperties = Object.keys(displayPropertyMap);
  return displayProperties.indexOf(key) >= 0;
};

export const filterDisplayProperties = (obj) => {
  return Object.keys(obj).reduce((formattedList, key) => {
    if (isADisplayProperty(key)) {
      return [
        ...formattedList,
        {
          label: displayPropertyMap[key],
          value: obj[key],
        },
      ];
    }
    return formattedList;
  }, []);
};

export const showReadableText = (str) => (str ? str : "N/A");
