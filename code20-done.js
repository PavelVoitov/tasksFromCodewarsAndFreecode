function feast(beast, dish) {
    const a = beast;
    const b = dish;
    if (a[0] === b[0] && a[a.length -1] === b[b.length -1]) {
        return true
    } else {
        return false
    }
    }

//   console.log(feast("great blue hero", "garlic naan"));  