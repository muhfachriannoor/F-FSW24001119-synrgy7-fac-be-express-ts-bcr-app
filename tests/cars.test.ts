import request from "supertest";
import app from "../routes/server";

describe("testing /api/cars/list-available", () => {
  it("it should return 200 without filtering", async () => {
    await request(app).get("/api/cars/list-available")
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect(200);
  });
});