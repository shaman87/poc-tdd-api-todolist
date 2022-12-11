import express from "express";
import { getTodoList, postTask } from "../controllers/todolist-controllers";

const router = express.Router();

router
  .get("/todolist", getTodoList)
  .post("/todolist", postTask);

export default router;