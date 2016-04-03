//Reverses a string
var reverse_it = function(str) {
  var reverse = '';
  length = str.length;

  for (var i = length-1; i >=0; i--) {
    reverse += str[i];
  }
  return reverse;

};
