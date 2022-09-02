function grow(x){
    let count = 1;
    for (let i = 0; i < x.length; i++) {
      
      count *= x[i]
    }

    return count;
  }

    console.log(grow([4, 1, 1, 1, 4]));