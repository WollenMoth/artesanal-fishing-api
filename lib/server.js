const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();
const port = 8000;

const prisma = new PrismaClient();

app.use(express.json());

app.get("/api/v1", (req, res) => {
    res.json({ message: "Welcome to the artisanal fishing API!" });
});

app.get("/api/v1/captains", async (req, res) => {
    const captains = await prisma.captain.findMany();
    res.json(captains);
});

app.get("/api/v1/captains/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const captain = await prisma.captain.findUnique({ where: { id } });
    res.json(captain);
});

app.post("/api/v1/captains", async (req, res) => {
    try {
        const data = req.body;
        const captain = await prisma.captain.create({ data });
        res.status(201).json(captain);
    } catch (error) {
        const message = "No se ha podido crear el capitán";
        res.status(400).json({ message });
    }
});

app.put("/api/v1/captains/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const captain = await prisma.captain.update({ where: { id }, data });
        res.json(captain);
    } catch (error) {
        const message = "No se ha podido actualizar el capitán";
        res.status(400).json({ message });
    }
});

app.delete("/api/v1/captains/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.captain.delete({ where: { id } });
        const message = "El capitán ha sido eliminado";
        res.json({ message });
    } catch (error) {
        const message = "No se ha podido eliminar el capitán";
        res.status(400).json({ message });
    }
});

app.get("/api/v1/companies", async (req, res) => {
    const companies = await prisma.company.findMany();
    res.json(companies);
});

app.get("/api/v1/companies/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const company = await prisma.company.findUnique({ where: { id } });
    res.json(company);
});

app.post("/api/v1/companies", async (req, res) => {
    try {
        const data = req.body;
        const company = await prisma.company.create({ data });
        res.status(201).json(company);
    } catch (error) {
        const message = "No se ha podido crear la empresa";
        res.status(400).json({ message });
    }
});

app.put("/api/v1/companies/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const company = await prisma.company.update({ where: { id }, data });
        res.json(company);
    } catch (error) {
        const message = "No se ha podido actualizar la empresa";
        res.status(400).json({ message });
    }
});

app.delete("/api/v1/companies/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.company.delete({ where: { id } });
        const message = "La empresa ha sido eliminada";
        res.json({ message });
    } catch (error) {
        const message = "No se ha podido eliminar la empresa";
        res.status(400).json({ message });
    }
});

app.get("/api/v1/boats", async (req, res) => {
    const boats = await prisma.boat.findMany();
    res.json(boats);
});

app.get("/api/v1/boats/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const boat = await prisma.boat.findUnique({ where: { id } });
    res.json(boat);
});

app.post("/api/v1/boats", async (req, res) => {
    try {
        const data = req.body;
        const boat = await prisma.boat.create({ data });
        res.status(201).json(boat);
    } catch (error) {
        const message = "No se ha podido crear el barco";
        res.status(400).json({ message });
    }
});

app.put("/api/v1/boats/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const boat = await prisma.boat.update({ where: { id }, data });
        res.json(boat);
    } catch (error) {
        const message = "No se ha podido actualizar el barco";
        res.status(400).json({ message });
    }
});

app.delete("/api/v1/boats/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.boat.delete({ where: { id } });
        const message = "El barco ha sido eliminado";
        res.json({ message });
    } catch (error) {
        const message = "No se ha podido eliminar el barco";
        res.status(400).json({ message });
    }
});

app.get("/api/v1/proposals", async (req, res) => {
    const proposals = await prisma.proposal.findMany();
    res.json(proposals);
});

app.get("/api/v1/proposals/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const proposal = await prisma.proposal.findUnique({ where: { id } });
    res.json(proposal);
});

app.post("/api/v1/proposals", async (req, res) => {
    try {
        const data = req.body;
        const proposal = await prisma.proposal.create({ data });
        res.status(201).json(proposal);
    } catch (error) {
        const message = "No se ha podido crear la propuesta";
        res.status(400).json({ message });
    }
});

app.put("/api/v1/proposals/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const proposal = await prisma.proposal.update({ where: { id }, data });
        res.json(proposal);
    } catch (error) {
        const message = "No se ha podido actualizar la propuesta";
        res.status(400).json({ message });
    }
});

app.delete("/api/v1/proposals/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.proposal.delete({ where: { id } });
        const message = "La propuesta ha sido eliminada";
        res.json({ message });
    } catch (error) {
        const message = "No se ha podido eliminar la propuesta";
        res.status(400).json({ message });
    }
});

app.get("*", (req, res) => {
    res.redirect("/api/v1");
});

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = server;
