function howMuchILoveYou(nbPetals) {
    const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    if (arr.length >= nbPetals) {
        return arr[nbPetals - 1];  
    } else if (nbPetals % arr.length === 0) {
      return arr[5];
    } else  if (nbPetals % arr.length !== 0) {
        let index = nbPetals % arr.length;
        return arr[index - 1];
    } 
}
 console.log(howMuchILoveYou(228));