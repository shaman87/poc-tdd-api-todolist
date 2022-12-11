import express from "express";
import { deleteTask, getTodoList, postTask, updateTask } from "../controllers/todolist-controllers";

const router = express.Router();

router
  .get("/todolist", getTodoList)
  .post("/todolist", postTask)
  .put("/todolist/:taskId", updateTask)
  .delete("/todolist/:taskId", deleteTask);

export default router;