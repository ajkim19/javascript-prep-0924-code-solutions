/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  let isVowelBool = false;

  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      isVowelBool = true;
      break;
    }
  }

  return isVowelBool;
}
