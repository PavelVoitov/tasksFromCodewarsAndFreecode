function validateUsr(username) {
    if (username.length < 4 || username.length > 16 || username.includes(' ')) {
        return false;
    } else {
        for (let i = 0; i < username.length; i++) {
            if (username[i] === username[i].toLowerCase()) {
                  return true;
              } else if (username[i] === "_") {
                  return true;
              } else if (typeof username[i] === "Number") {
                  return true;
              } else return false;
          } 
  
          }
    }  
    
    console.log(validateUsr(''));

