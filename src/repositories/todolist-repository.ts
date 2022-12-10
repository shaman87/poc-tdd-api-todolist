let todolist = [];

function findManyTodoList() {
  return todolist;
}

function cleanArray() {
  return todolist = [];
}

function populateArray() {
  return todolist = [
    {
      id: 1, 
      task: "Study JavaScript", 
      done: true
    }
  ]
}

export { findManyTodoList, cleanArray, populateArray };