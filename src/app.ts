import express, { Request, Response } from "express";
import todolistRouter from "./routers/todolist-router";

const server = express();
server
  .use(express.json())
  .get("/health", (req: Request, res: Response) => res.send("Ok!"))
  .use(todolistRouter);

server.listen(4000, () => {
  console.log("Listening on port 4000");
});

export default server;