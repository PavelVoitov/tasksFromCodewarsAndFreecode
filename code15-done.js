function divisibleBy(numbers, divisor){
    let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
        newNumbers.push(numbers[i])
    }
  }
  return newNumbers;
}

