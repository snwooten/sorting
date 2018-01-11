function split(array){
  //check if all elements are numbers
  let leftArr = [];
  let rightArr = [];
  let newArr = [];

  array.forEach(function(el){
    if(typeof el !== "number"){
      throw new TypeError('Elements must be numbers');
    }
  });

  if(array.forEach(function(el){
    typeof el === "number";
  })){
  };

  if (array.length < 2){
    return array;
  }else{
    for(var i = 0; i < Math.ceil(array.length/2); i++){
      leftArr.push(array[i]);
    }
    newArr.push(leftArr);

    for(var j = Math.ceil(array.length/2); j < array.length; j++){
      rightArr.push(array[j]);
    }
    newArr.push(rightArr);
  }
  return newArr;
}

function merge(arr1, arr2){
  if(!arr2){
    return arr1;
  }else{
    let nArr = [];
    nArr = nArr.concat(arr1, arr2);
    return nArr;
  }
}

function mergeSort(arr){
  let sortedArr = [];
  let splitArr = split(arr);
  let leftArr = splitArr[0];
  let rightArr = splitArr[1];

  if(!rightArr){
    sortedArr.push(leftArr);
  }else{

  }
  return sortedArr;
}


   // let count = 0;
    // while(count < rightArr.length){
    //   if(rightArr[count] && leftArr[count] <= rightArr[count]){
    //     sortedArr.push(leftArr[count], rightArr[count]);
    //     count++;
    //   }else{
    //     sortedArr.push(rightArr[count], leftArr[count]);
    //     count++;
    //   }
    //   console.log(count, sortedArr);
    // }
