function positiveSum(arr) {
    count = 0;
    if (arr.length === 0) {
        return 0;
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += arr[i]
        } else { count + 0}
    }
    return count;
}

// console.log(positiveSum([]));