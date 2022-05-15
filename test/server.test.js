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

test("Redirects to /api/v1", async () => {
    const res = await http.get("/");

    expect(res.status).toBe(302);
});

describe("Unit Tests for the Captains API", () => {
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

describe("Unit Tests for the Companies API", () => {
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
            name: "Boat",
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
            name: "Bote",
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

describe("Unit Tests for the Proposals API", () => {
    let id;

    test("GET /api/v1/proposals", async () => {
        const res = await http.get("/api/v1/proposals");

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    test("GET /api/v1/proposals/:id", async () => {
        const res = await http.get("/api/v1/proposals/1");

        expect(res.status).toBe(200);
        expect(res.body).toBeDefined();
    });

    test("POST /api/v1/proposals", async () => {
        const res = await http.post("/api/v1/proposals").send({
            name: "User",
            email: "user@domain.com",
            phone: "111 111 1111",
            proposal:
                "Donec eget ligula rhoncus, pharetra dolor id, viverra orci. Pellentesque imperdiet sagittis risus sit amet.",
        });

        expect(res.status).toBe(201);
        expect(res.body.name).toBe("User");
        expect(res.body.email).toBe("user@domain.com");
        expect(res.body.phone).toBe("111 111 1111");
        expect(res.body.proposal).toBe(
            "Donec eget ligula rhoncus, pharetra dolor id, viverra orci. Pellentesque imperdiet sagittis risus sit amet."
        );

        id = res.body.id;
    });

    test("PUT /api/v1/proposals/:id", async () => {
        const res = await http.put(`/api/v1/proposals/${id}`).send({
            name: "Usuario",
            email: "usuario@dominio.com",
            phone: "555 555 5555",
            proposal:
                "Ut blandit urna et odio pellentesque, eu maximus dolor scelerisque. Duis ac risus pharetra, vulputate.",
        });

        expect(res.status).toBe(200);
        expect(res.body.name).toBe("Usuario");
        expect(res.body.email).toBe("usuario@dominio.com");
        expect(res.body.phone).toBe("555 555 5555");
        expect(res.body.proposal).toBe(
            "Ut blandit urna et odio pellentesque, eu maximus dolor scelerisque. Duis ac risus pharetra, vulputate."
        );
    });

    test("DELETE /api/v1/proposals/:id", async () => {
        const res = await http.delete(`/api/v1/proposals/${id}`);

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch(/eliminada/i);
    });

    test("Invalid POST /api/v1/proposals", async () => {
        const res = await http.post("/api/v1/proposals").send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido crear/i);
    });

    test("Invalid PUT /api/v1/proposals/:id", async () => {
        const res = await http.put("/api/v1/proposals/1234").send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido actualizar/i);
    });

    test("Invalid DELETE /api/v1/proposals/:id", async () => {
        const res = await http.delete("/api/v1/proposals/1234");

        expect(res.status).toBe(400);
        expect(res.body.message).toMatch(/no se ha podido eliminar/i);
    });
});
