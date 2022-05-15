const supertest = require("supertest");
const server = require("../lib/server");
const http = supertest(server);

afterAll(() => {
    server.close();
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

describe("Unit Tests for Companies API", () => {
    let id;

    test("GET /api/v1/companies", async () => {
        const res = await http.get("/api/v1/companies");

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    test("GET /api/v1/companies/:id", async () => {
        const res = await http.get("/api/v1/companies/1");

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    test("POST /api/v1/companies", async () => {
        const res = await http.post("/api/v1/companies").send({
            name: "Company",
        });

        expect(res.status).toBe(201);
        expect(res.body.name).toBe("Company");

        id = res.body.id;
    });

    test("PUT /api/v1/companies/:id", async () => {
        const res = await http.put(`/api/v1/companies/${id}`).send({
            name: "Empresa",
        });

        expect(res.status).toBe(200);
        expect(res.body.name).toBe("Empresa");
    });

    test("DELETE /api/v1/companies/:id", async () => {
        const res = await http.delete(`/api/v1/companies/${id}`);

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch(/eliminada/i);
    });

    test("Invalid POST /api/v1/companies", async () => {
        const res = await http.post("/api/v1/companies").send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido crear/i);
    });

    test("Invalid PUT /api/v1/companies/:id", async () => {
        const res = await http.put("/api/v1/companies/1234").send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido actualizar/i);
    });

    test("Invalid DELETE /api/v1/companies/:id", async () => {
        const res = await http.delete("/api/v1/companies/1234");

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido eliminar/i);
    });
});

describe("Unit Tests for the Boats API", () => {
    let id;

    test("GET /api/v1/boats", async () => {
        const res = await http.get("/api/v1/boats");

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    test("GET /api/v1/boats/:id", async () => {
        const res = await http.get("/api/v1/boats/1");

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    test("POST /api/v1/boats", async () => {
        const res = await http.post("/api/v1/boats").send({
            idCaptain: 1,
            idCompany: 1,
            fishingLocation: "35.019928, -40.575989",
            capture: "Tuna",
            zarpe: "Boca del Río, Veracruz, México",
        });

        expect(res.status).toBe(201);
        expect(res.body.idCaptain).toBe(1);
        expect(res.body.idCompany).toBe(1);
        expect(res.body.fishingLocation).toBe("35.019928, -40.575989");
        expect(res.body.capture).toBe("Tuna");
        expect(res.body.zarpe).toBe("Boca del Río, Veracruz, México");

        id = res.body.id;
    });

    test("PUT /api/v1/boats/:id", async () => {
        const res = await http.put(`/api/v1/boats/${id}`).send({
            idCaptain: 1,
            idCompany: 1,
            fishingLocation: "-40.575989, 35.019928",
            capture: "Atún",
            zarpe: "Boca del Río, Veracruz, México",
        });

        expect(res.status).toBe(200);
        expect(res.body.idCaptain).toBe(1);
        expect(res.body.idCompany).toBe(1);
        expect(res.body.fishingLocation).toBe("-40.575989, 35.019928");
        expect(res.body.capture).toBe("Atún");
        expect(res.body.zarpe).toBe("Boca del Río, Veracruz, México");
    });

    test("DELETE /api/v1/boats/:id", async () => {
        const res = await http.delete(`/api/v1/boats/${id}`);

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch(/eliminado/i);
    });

    test("Invalid POST /api/v1/boats", async () => {
        const res = await http.post("/api/v1/boats").send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido crear/i);
    });

    test("Invalid PUT /api/v1/boats/:id", async () => {
        const res = await http.put("/api/v1/boats/1234").send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido actualizar/i);
    });

    test("Invalid DELETE /api/v1/boats/:id", async () => {
        const res = await http.delete("/api/v1/boats/1234");

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido eliminar/i);
    });
});
