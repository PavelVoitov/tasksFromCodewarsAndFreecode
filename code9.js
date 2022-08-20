String.prototype.toAlternatingCase = function () {
    // String = String(String);
    let backwards = [];
    for (let i = 0; i < String.length; i++) {
        console.log(String[i]);
      if (String[i] === String[i].toLowerCase()) {
        String[i].toUpperCase();
        backwards.push(String[i]);
      } else { 
        String[i].toLowerCase();
        backwards.push(String[i]);
      }
    }
    return backwards.join('');
  }

  // console.log("helloworld".toAlternatingCase());