String.prototype.toAlternatingCase = function () {
     let str = String(this)
    let backwards = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
        backwards.push(str[i].toUpperCase());
      } else {
        backwards.push(str[i].toLowerCase());
      }
    }
    console.log(backwards)
    return backwards.join('');
  }

  console.log('helLoWorld'.toAlternatingCase());

String.prototype.Plus1 = function() {
  return (this.toUpperCase());
}

console.log('fsfe'.Plus1())