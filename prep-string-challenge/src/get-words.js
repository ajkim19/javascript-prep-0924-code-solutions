/* exported getWords */
function getWords(string) {
  let beginWord = 0;
  const wordArray = [];

  for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1) {
      wordArray.push(string.slice(beginWord, string.length));
    }

    if (string[i] === ' ') {
      wordArray.push(string.slice(beginWord, i));
      beginWord = i + 1;
    }
  }

  return wordArray;
}
