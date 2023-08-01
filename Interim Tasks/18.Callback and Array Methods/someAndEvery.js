function allEvens(arr) {
  return arr.every(function (num) {
    return num % 2 === 0;
  });
}

//const allEvens = function (arr) {
//     return arr.every(num => num % 2 === 0);
//   }

//const allEvens = arr => arr.every(num => num % 2 === 0);
