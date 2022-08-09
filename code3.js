 function validateUsr(username) {
let str = /[a-z0-9_]/;
for (let i = 0; i < username.length; i++) {
    if (username[i] == str) {
        return true;
    } else return false;
} 

}
//  console.log(validateUsr("z"));

// let str = "zvdvewv";
// let reg = /[a-z]/;
// console.log(sort);

// let men = "bdzhndfnhzdg";
// let num = /[a-z]/;

// let res = men.match(num);
// console.log(res);