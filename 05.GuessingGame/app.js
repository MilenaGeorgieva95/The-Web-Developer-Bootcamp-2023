let maximum = prompt("Enter the maximum number or type 'q' to quit!");
let isGameOver = false;
let attemptsCount = 1;

while (!parseInt(maximum)) {
  if (maximum === "q") {
    isGameOver = true;
    break;
  }
  maximum = prompt("Enter a valid maximum number or type 'q' to quit!");
}

if (!isGameOver) {
  maximum = parseInt(maximum);

  const targetNum = Math.floor(Math.random() * maximum) + 1;

  let guess = prompt("Enter your first guess or type 'q' to quit!");

  while (parseInt(guess) !== targetNum) {
    if (guess === "q") {
      isGameOver = true;
      break;
    }

    guess = parseInt(guess);

    if (guess > targetNum) {
      attemptsCount++;
      guess = prompt("Too high! Enter a new guess or type 'q' to quit!");
    } else if (guess < targetNum) {
      attemptsCount++;
      guess = prompt("Too low! Enter a new guess or type 'q' to quit!");
    } else {
      guess = prompt("Enter a valid guess or type 'q' to quit!");
    }
  }
}

if (isGameOver) {
  console.log("Ok, you quit!");
} else {
  if (attemptsCount === 1) {
    console.log(`You got it! It took you 1 guess`);
  } else {
    console.log(`You got it! It took you ${attemptsCount} guesses`);
  }
}
