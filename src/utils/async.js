/**
 * @fileoverview Utility to make asynchronous api calls.
 */

export const fetchFromUrl = (url) => {
  try {
    if (!url) {
      throw new Error("URL not provided.");
    } else {
      return fetch(url);
    }
  } catch (error) {
    console.error(error.message);
  }
};
