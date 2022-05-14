const express = require("express");
const app = express();
app.use(express.json());
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", (req, res) => {
    res.send("Welcome to the artisanal fishing API!");
});

app.post("/add", async (req, res) => {
    const data = {
        captainName: req.body.captainName,
        email: req.body.email,
        country: req.body.country,
        state: req.body.state,
        idCompany: req.body.company,
        fishingLocation: req.body.location,
        capture: req.body.capture,
        zarpe: req.body.zarpe,
    };

    await prisma.boat.create({ data: data });
    res.set("Access-Control-Allow-Origin", "*");
    return res.status(201).json({ status: true });
});

module.exports = app;
