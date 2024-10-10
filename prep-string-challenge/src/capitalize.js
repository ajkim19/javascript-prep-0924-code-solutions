/* exported capitalize */
function capitalize(string) {
  let string1 = string.slice(0, 1).toUpperCase();
  let string2 = string.slice(1, string.length).toLowerCase();

  return string1 + string2;
}
