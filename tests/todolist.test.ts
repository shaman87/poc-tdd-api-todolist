import supertest from "supertest";
import server from "../src/app";
import { cleanArray, findManyTodoList, populateArray } from "../src/repositories/todolist-repository";

const api = supertest(server);

describe("GET /todolist", () => {
  it("should respond with status 200 and empty array when todo list is empty", async () => {
    cleanArray();
    const response = await api.get("/todolist");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should respond with status 200 and array with todolist data", async () => {
    populateArray();
    const todolist = findManyTodoList();
    const response = await api.get("/todolist");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: todolist[0].id, 
        task: todolist[0].task, 
        done: todolist[0].done
      }
    ]);
  });
});