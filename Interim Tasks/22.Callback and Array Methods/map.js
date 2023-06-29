const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  {
    first: "Hermione",
    last: "Granger",
  },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  {
    first: "Minerva",
    last: "McGonagall",
  },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (name) {
  return name.first;
});

//   const firstNames = fullNames.map(name => name.first);
