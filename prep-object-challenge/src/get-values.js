/* exported getValues */
function getValues(object) {
  let valuesArray = [];

  for (key in object) {
    valuesArray.push(object[key]);
  }

  return valuesArray;
}
