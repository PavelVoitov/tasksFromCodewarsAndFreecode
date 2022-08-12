function digitize(n) {
    n = String(n);
    let arer = [];
     for (let i = 0; i < n.length; i++) {
      let c = Number(n[i]);
       arer.push(c);
     }
     arer.reverse();
     return arer;
   }

  //  console.log(digitize(12335));