//Find the max of an array
var my_max = function(arr_of_nums) {
  var max = arr_of_nums[0];
  length = arr_of_nums.length;

  for (var i = 0; i < length; i++) {
    if (max < arr_of_nums[i]) {
      max = arr_of_nums[i];
    }
  }

  return max;
};



