import supertest from "supertest";
import server from "../src/app";
import { cleanArray, populateArray } from "../src/repositories/todolist-repository";

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
    const response = await api.get("/todolist");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: response.body[0].id, 
        taskName: response.body[0].taskName, 
        done: response.body[0].done
      }
    ]);
  });
});

describe("POST /todolist", () => {
  it("should respond with status 400 when task name is not given", async () => {
    const response = await api.post("/todolist");

    expect(response.status).toBe(400);
  })

  it("should respond with status 400 when given task name is not a string", async () => {
    const task = 1;
    const response = await api.post("/todolist").send({ task });

    expect(response.status).toBe(400);
  })

  it("should respond with status 200 and the new task when the given task is valid", async () => {
    cleanArray();
    const task = "Study JavaScript";
    const response = await api.post("/todolist").send({ task });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      {
        id: response.body.id, 
        taskName: response.body.taskName, 
        done: response.body.done
      }
    );
  })

  
})