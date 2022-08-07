function min(arr, toReturn) {
     if (toReturn === "index") {
          return 0;
     } else if (toReturn === "value") {
          return Math.min.apply(null, arr);
     } else {return "Not correct data"}
   }
 console.log(min([1,2,3,4,5], 'value'));

 console.log(Math.min.apply(null, [1,2,3,4,5]));