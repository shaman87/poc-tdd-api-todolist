import supertest from "supertest";
import server from "../src/app";

const api = supertest(server);

describe("GET /todolist", () => {
  it("should respond with status 200 and empty array when todo list is empty", async () => {
    const response = await api.get("/todolist");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});