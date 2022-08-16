function howMuchILoveYou(nbPetals) {
    const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for (let i = 0; nbPetals < arr.length; i++) {
        if (i === nbPetals - arr.length) {
            return arr[i];
        }
    }

//     let arr[i] =  (7 - arr.length + 1)
// console.log(arr[i] =  7 - arr.length + 1);
}

 console.log(howMuchILoveYou(7));