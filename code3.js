//  function validateUsr(username) {
// let str = /[a-z0-9]/;
// console.log(str);
// for (let i = 0; i < username.length; i++) {
//     console.log(username[i]);
//     console.log(typeof username[i]);
//     if (username[i] == str) {
//         console.log(username[i]);
//         return true;
//     } else return false;
// } 

// }
// console.log(validateUsr("A"));

function validateUsr(username) {
    let str = /a-z0-9/;
    return username.includes(str);
};

// console.log(validateUsr('A'));