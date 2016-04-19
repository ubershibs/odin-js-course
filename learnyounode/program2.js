var sum = 0;
var arr = process.argv;
for(var i = 2; i <= arr.length; i++) {
  if (Number.isFinite(+arr[i])) {
    sum += +arr[i];
  }
}
console.log(sum);
