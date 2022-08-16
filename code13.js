function removeChar(str){
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    arr.pop();
    arr.shift();
    return arr.join("");
};


// console.log(removeChar('eloquent'));