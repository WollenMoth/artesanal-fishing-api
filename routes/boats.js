const { PrismaClient } = require("@prisma/client");
const express = require("express");
const router = express.Router();

const prisma = new PrismaClient();

router.get("", async (req, res) => {
    const boats = await prisma.boat.findMany();
    res.json(boats);
});

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const boat = await prisma.boat.findUnique({ where: { id } });
    res.json(boat);
});

router.post("", async (req, res) => {
    try {
        const data = req.body;
        const boat = await prisma.boat.create({ data });
        res.status(201).json(boat);
    } catch (error) {
        const message = "No se ha podido crear el barco";
        res.status(400).json({ message });
    }
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

module.exports = router;
