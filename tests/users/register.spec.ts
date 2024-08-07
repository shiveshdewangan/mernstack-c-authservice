import request from "supertest";
import app from "../../src/app";

describe("POST /auth/register", () => {
    describe("Given all fields", () => {
        it("should return the 201 status code", async () => {
            const response = await request(app).post("/auth/register").send();
            expect(response.statusCode).toEqual(201);
        });

        it("should return valid JSON", async () => {
            const response = await request(app).post("/auth/register").send();
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json"),
            );
        });
    });
    describe("Fields are missing", () => {});
});
