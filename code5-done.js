function countPositivesSumNegatives(input) {
    let oneTwo = [];
    let count = 0;
    let sum = 0;
  if (input === null) {
    return oneTwo;
  } else if (input.length === 0) {
    return oneTwo;
  }
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
       count +=1;
      } else if (input[i] < 0) {
         sum += input[i];
      } 
    }
    oneTwo.push(count);
    oneTwo.push(sum);
    return oneTwo;
  }

  // console.log(countPositivesSumNegatives([]));