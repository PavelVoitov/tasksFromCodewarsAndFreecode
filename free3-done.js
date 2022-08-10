function rangeOfNumbers(startNum, endNum) {
    
    return startNum === endNum ? [startNum]
    :   startNum > endNum ? [] 
    :   rangeOfNumbers(startNum, endNum - 1).concat(endNum);
    
  };

  // console.log(rangeOfNumbers(1, 6));

 