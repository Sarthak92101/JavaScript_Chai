let todo = [];

let req = prompt("Enter your request");

while (true) {
  if (req === "quit") {
    console.log("Quitting app");
    break;
  }

  if (req === "list") {
    console.log("-------------");
    for (let task of todo) {
      console.log(task);
    }
    console.log("-------------");
  } else if (req === "add") {
    let task = prompt("Add item to add");
    todo.push(task);
    console.log("Task added");
  } else {
    console.log("Invalid request. Please enter 'add', 'list', or 'quit'.");
  }

  // Update req at the end of the loop
  req = prompt("Enter your request");
}
