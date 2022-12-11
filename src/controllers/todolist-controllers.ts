import { Request, Response } from "express";
import { findManyTodoList, insertTask } from "../repositories/todolist-repository";

function getTodoList(req: Request, res: Response  ) {
  const todolist = findManyTodoList();
  if(!todolist) return res.status(204).send("NO CONTENT!");

  return res.status(200).send(todolist);
}

function postTask(req: Request, res: Response) {
  const { task } = req.body;
  const taskName: string = task;
  if(!taskName || typeof task !== "string") return res.status(400).send("BAD REQUEST!");

  const newTask = insertTask(taskName);
  return res.status(200).send(newTask);
}

export { getTodoList, postTask };