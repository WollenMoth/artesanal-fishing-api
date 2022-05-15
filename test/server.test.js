const supertest = require("supertest");
const app = require("../lib/server");
const http = supertest(app);

test("GET /api/v1", async () => {
    const res = await http.get("/api/v1");

    expect(res.status).toBe(200);
    expect(res.body.message).toMatch(/welcome/i);
});
