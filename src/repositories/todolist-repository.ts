import { Task } from "../protocols/task";

let todolist: Task[] = [
  {
    id: 1, 
    taskName: "Study JavaScript", 
    done: false
  }, 
  {
    id: 2, 
    taskName: "Read a book", 
    done: false
  }, 
  {
    id: 3, 
    taskName: "Jogging", 
    done: false
  }
];

function findManyTodoList(): Task[] {
  return todolist;
}

function insertTask(taskName: string): Task {
  if(todolist.length === 0) {
    todolist.push(
      {
        id: 1, 
        taskName, 
        done: false
      }
    );

    return {
      id: 1, 
      taskName, 
      done: false
    }
  }

  const taskId = todolist[todolist.length - 1].id + 1;
  
  todolist.push(
    {
      id: taskId, 
      taskName, 
      done: false
    }
  )

  return {
    id: taskId, 
    taskName, 
    done: false
  }
}

function cleanArray(): Task[] {
  return todolist = [];
}

function populateArray(): Task[] {
  return todolist = [
    {
      id: 1, 
      taskName: "Study JavaScript", 
      done: false
    }
  ]
}

export { findManyTodoList, insertTask, cleanArray, populateArray };