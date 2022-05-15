const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.get("/api/v1", (req, res) => {
    res.send("Welcome to the artisanal fishing API!");
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

module.exports = app;
