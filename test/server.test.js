const supertest = require("supertest");
const app = require("../lib/server");
const http = supertest(app);

afterAll(() => {
    app.close();
});

test("GET /api/v1", async () => {
    const res = await http.get("/api/v1");

    expect(res.status).toBe(200);
    expect(res.body.message).toMatch(/welcome/i);
});

describe("Unit Tests for Captains API", () => {
    let id;

    test("GET /api/v1/captains", async () => {
        const res = await http.get("/api/v1/captains");

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    test("GET /api/v1/captains/:id", async () => {
        const res = await http.get("/api/v1/captains/1");

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    test("POST /api/v1/captains", async () => {
        const res = await http.post("/api/v1/captains").send({
            name: "Captain",
            email: "captain@domain.com",
            country: "Mexico",
            state: "Colima",
        });

        expect(res.status).toBe(201);
        expect(res.body.name).toBe("Captain");
        expect(res.body.email).toBe("captain@domain.com");
        expect(res.body.country).toBe("Mexico");
        expect(res.body.state).toBe("Colima");

        id = res.body.id;
    });

    test("PUT /api/v1/captains/:id", async () => {
        const res = await http.put(`/api/v1/captains/${id}`).send({
            name: "Capitán",
            email: "capitan@dominio.com",
            country: "Mexico",
            state: "Veracruz",
        });

        expect(res.status).toBe(200);
        expect(res.body.name).toBe("Capitán");
        expect(res.body.email).toBe("capitan@dominio.com");
        expect(res.body.country).toBe("Mexico");
        expect(res.body.state).toBe("Veracruz");
    });

    test("DELETE /api/v1/captains/:id", async () => {
        const res = await http.delete(`/api/v1/captains/${id}`);

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch(/eliminado/i);
    });

    test("Invalid POST /api/v1/captains", async () => {
        const res = await http.post("/api/v1/captains").send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido crear/i);
    });

    test("Invalid PUT /api/v1/captains/:id", async () => {
        const res = await http.put("/api/v1/captains/1234").send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido actualizar/i);
    });

    test("Invalid DELETE /api/v1/captains/:id", async () => {
        const res = await http.delete("/api/v1/captains/1234");

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido eliminar/i);
    });
});
