function bubbleSort(array) {
  array.forEach(function(el) {
    if(typeof el !== 'number') {
      throw new TypeError('Elements must be numbers');
    }
  })

  //base - array is sorted
  var newArr = array;
  var arr = array.slice();
  for(var j = 0; j < array.length-1; j++) {
    for (var i = 0; i < array.length; i++) {
      var stored = array[i];
      if (array[i] > array[i + 1]) {
        newArr[i] = array[i+1]
        newArr[i+1] = stored;
      }
    }
  }
  console.log('arr', arr);
  console.log('array', array)


  console.log(newArr);
  return newArr;
}
