import express from "express";
import { getTodoList } from "../controllers/todolist-controllers";

const router = express.Router();

router.get("/todolist", getTodoList);

export default router;