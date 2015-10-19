
function accumulate(array, func) {
  var array2 = [];
  for (var i = 0; i < array.length; i++ ) {
    array2.push(func(array[i]));
  }
  return array2;
}

module.exports = accumulate;
