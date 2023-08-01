function mysteryGame(mystery) {
  if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
    console.log("YOU GOT IT!!!");
  }
}

mysteryGame("Panda7");
