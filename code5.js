function countPositivesSumNegatives(input) {
    let oneTwo = [];
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        let sum = 0;
        let count;
        count++;
        sun += count;
        oneTwo.push(sun);
      }
      // } else if (input[i] < 0) {
      //   input[i] += input[i];
      //   oneTwo.push(input[i]);
      // } else if (input === null) {
      //   return [];
      // } else if (input === []) {
      //   return [];
      // }
    }
    return oneTwo;
  }

  console.log(countPositivesSumNegatives([100, 2, 3, 5, 5, 6, 7, 8, -11, -12, -13, -14, -15]));