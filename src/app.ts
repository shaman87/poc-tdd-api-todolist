import express, { Request, Response } from "express";

const server = express();
server
  .use(express.json())
  .get("/health", (req: Request, res: Response) => res.send("Ok!"));

server.listen(4000, () => {
  console.log("Listening on port 4000");
});