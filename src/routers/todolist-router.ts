import express from "express";
import { getTodoList, postTask, updateTask } from "../controllers/todolist-controllers";

const router = express.Router();

router
  .get("/todolist", getTodoList)
  .post("/todolist", postTask)
  .put("/todolist/:taskId", updateTask);

export default router;