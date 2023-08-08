let input = prompt("What would you like to do?");

const todos = ["Collect chicken eggs", "Go for a walk"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    if (todos.length === 0) {
      console.log("Your Todo list is empty!");
    } else {
      console.log("******************");
      for (let i = 0; i < todos.length; i++) {
        console.log(`${i}: ${todos[i]}`);
      }
      console.log("******************");
    }
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list.`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete:"));

    if (
      !Number.isNaN(index) &&
      index >= 0 &&
      index < todos.length &&
      todos.length >= 1
    ) {
      let deletedTodo = todos.splice(index, 1);
      console.log(`Ok, deleted ${deletedTodo}.`);
      if (todos.length === 0) {
        console.log("Your Todo list is empty!");
      }
    } else {
      console.log("Unknown index!");
    }
  }
  input = prompt("What would you like to do?");
}

console.log("Ok, you quit the app.");
