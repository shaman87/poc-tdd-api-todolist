import { Request, Response } from "express";
import { findManyTodoList } from "../repositories/todolist-repository";

async function getTodoList(req: Request, res: Response  ) {
  try {
    const todolist = findManyTodoList();
    return res.status(200).send(todolist);
  } catch(error) {
    return res.status(204).send("NO CONTENT");
  }
}

export { getTodoList };