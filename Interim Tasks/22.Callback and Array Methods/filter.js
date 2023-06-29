function validUserNames(arr) {
  const filteredArr = arr.filter(function (name) {
    return name.length < 10;
  });
  return filteredArr;
}

//   function validUserNames(arr) {
//     return arr.filter(name => name.length < 10);
//   }

//   const validUserNames = usernames => usernames.filter(usr => usr.length < 10);
