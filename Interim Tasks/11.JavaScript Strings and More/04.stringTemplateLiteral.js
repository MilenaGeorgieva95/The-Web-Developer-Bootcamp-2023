const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;

const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;

console.log(roll);
