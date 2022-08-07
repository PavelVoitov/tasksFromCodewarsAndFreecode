function consecutive(arr) {
     let count = 0
    // let increasingArray = [];
    if (typeof arr !== "object") {
        return ("not corectly data");
    } else if (arr.length === 1 || arr.length == 0) {
        return 0;
    } else if (arr.length >= 2) {
        arr.sort((a,b) => a - b);
        for (let i = 0; i < arr.length; i++) {
           if (arr[i] + 1 < arr[i + 1] ) {
            let plusNum = arr[i + 1] - 1;
            arr.push(plusNum);
            count += 1; 
            arr.sort((a,b) => a - b);
            i = 0;
           } 
        } 
      
        return count;
    }
        // return increasingArray;
    }

    console.log(consecutive([10, 7, 5, 6, 1]));