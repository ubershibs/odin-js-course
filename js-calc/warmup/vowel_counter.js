//Vowel counter
var count_vowels = function(str) {
  length = str.length;
  vowels = 0;

  pattern = /[aeiouy]/i;

  for (var  i = 0; i < length; i++) {
    if (pattern.test(str[i])) {
      vowels++;
    }
  }

  return vowels;
};
