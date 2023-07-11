/**
 * Returns a string of form "abc...xyz"
 * @param {string} str string to string
 * @param {number} n number of chars to keep at front/end
 * @param {string} separator
 * @returns {string}
 */
const truncateString = (str: string, n = 4, separator = '...') => {
  if (str) {
    return `${str.slice(0, n)}${separator}${str.slice(str.length - n)}`
  }
  return ''
}

export default truncateString
