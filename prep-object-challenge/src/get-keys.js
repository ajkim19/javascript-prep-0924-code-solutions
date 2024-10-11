/* exported getKeys */
function getKeys(object) {
  let keysArray = [];

  for (key in object) {
    keysArray.push(key);
  }

  return keysArray;
}
