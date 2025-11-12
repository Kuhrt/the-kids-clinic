/**
 * Turns a string into an appropriate key when mapping list components.
 * @param {string} str
 * @returns {string}
 */
export const getKeyFromString = (str: string) =>
  str.toLowerCase().replace(/\s/g, '-');
