function sameCase(a, b) {
    if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
        return -1
    } else if (a === a.toLowerCase() && b === b.toLowerCase()) {
        return 1
    } else if (a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    } else if (a === a.toUpperCase() && b === b.toLowerCase()) {
        return 0
    } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
        return 0
    }
  }

//   console.log(sameCase('r', 'W'))
//   console.log(sameCase('+', 'f'))
//   console.log(sameCase('G', 'H'))
//   console.log(sameCase('a','b'))
//   console.log(sameCase('0', 'f'))
//   console.log(sameCase('G', 'H'))
