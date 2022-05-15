const express = require("express");
const app = express();
app.use(express.json());

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.post("/v1/all/add", async (req, res) => {
    const data = {
        fishingLocation: req.body.location,
        capture: req.body.capture,
        zarpe: req.body.zarpe,
        captain: {
            create: {
                name: req.body.captainName,
                email: req.body.email,
                country: req.body.country,
                state: req.body.state,
            },
        },
        company: {
            connect: {
                id: req.body.company,
            },
        },
    };

    await prisma.boat.create({ data: data });
    res.set("Access-Control-Allow-Origin", "*");
    return res.status(201).json({ status: true });
});

app.post("/v1/company/add", async (req, res) => {
    const data = {
        name: req.body.companyName,
    };

    await prisma.company.create({ data: data });
    res.set("Access-Control-Allow-Origin", "*");
    return res.status(201).json({ status: true });
});

app.get("/v1/company/all", async (req, res) => {
    const allCompanys = await prisma.company.findMany({});

    res.set("Access-Control-Allow-Origin", "*");
    return res.json(allCompanys);
});

app.get("/v1/company/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const company = await prisma.company.findUnique({
        where: {
            id: id,
        },
    });

    res.set("Access-Control-Allow-Origin", "*");
    return res.json(company);
});

app.get("/v1/boat/all", async (req, res) => {
    const allBoatsInformation = await prisma.boat.findMany({
        include: { company: true, captain: true },
    });

    res.set("Access-Control-Allow-Origin", "*");
    return res.json(allBoatsInformation);
});

app.get("/v1/boat/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const boatInformation = await prisma.boat.findUnique({
        where: {
            id: id,
        },
        include: {
            company: true,
            captain: true,
        },
    });

    res.set("Access-Control-Allow-Origin", "*");
    return res.json(boatInformation);
});

app.get("/", (req, res) => {
    res.send("Welcome to the artisanal fishing API!");
});

module.exports = app;
