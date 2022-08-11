function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    const uniqueArr = Array.from(new Set(newArr));
    uniqueArr.sort((a, b) => a - b);
    return uniqueArr;
  }

  console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));