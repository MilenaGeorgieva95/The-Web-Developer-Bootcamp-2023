function returnDay(num) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num < 1 || num > 7) {
    return null;
  } else {
    return days[num - 1];
  }

  // const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // if (num < 1 || num > 7) {
  //   return null;
  // } else {
  //   return days[num];
  // }

  // if (num < 1 || num > 7) {
  //     return null;
  //   }
  //   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  //   return days[num - 1];
  // }

  //   if (num >= 1 && num <= 7) {
  //     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  //     return days[num - 1];
  //   }
  //   return null;
}
