import { displayPropertyMap } from "./constants";

export const debounce = (func, delay = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

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

/**
 * @description function to convert a simple string into
 * an HTML element with parts of it highlighted.
 * @params {String} str given string
 * @params {String} query substring which needs to be
 * highlighted.
 * @returns {HTML Element}
 */
export const getHighlightedString = (str, query) => {
  try {
    var len = str.length;
    if (len) {
      /**
       * 1. create the case-insensitive and global regex.
       * 2. Find the matches.
       * 3. Split the given string.
       * 4. Initialise an empty array.
       */
      let reg = new RegExp(query, "ig"),
        matches = str.match(reg),
        parts = str.split(reg),
        tempStr = [];

      // do the following only if we have parts of string available, and we have found matches.

      if (parts.length && matches && matches.length) {
        /**
         * 1. Push the part of the string into the new array.
         * 2. Create a temp string with required style using the first match.
         * 3. Push the temp string into the new array (i.e. after first part).
         * 4. Repeat till we reach the last part of the string.
         * IMP: Match substrings count will always be one less than the split parts.
         */
        for (let count = 0; count < parts.length; count++) {
          tempStr.push(parts[count]);
          if (matches[count]) {
            var temp = "<b class='highlight-class'>" + matches[count] + "</b>";
            tempStr.push(temp);
          }
        }
        // after all parts have been collected, join the array and return
        str = tempStr.join("");
      }
    } else {
      throw new Error("Empty String");
    }
    return str;
  } catch (e) {
    console.trace("Error ", e);
  }
};
