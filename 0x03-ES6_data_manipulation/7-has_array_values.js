/**
 * func returns a boolean if all the elements 
 * in the array exist within the set.
 * @param {Set} set
 * @param {Array} array
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  const newSet = new Set(array);
  for (const elem of newSet) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
