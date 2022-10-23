function sumOfDifferences(arr) {
   count = 0
   arr.sort((a, b) => b - a)
 for (let i = 0; i < arr.length - 1; i++) {
   let sum = arr[i] - arr[i + 1]
   count += sum
 }
 return count
 }

//  console.log(sumOfDifferences([0,4,-4,-5,-2,0]));