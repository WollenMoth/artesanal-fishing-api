const { PrismaClient } = require("@prisma/client");
const express = require("express");
const router = express.Router();

const prisma = new PrismaClient();

router.get("", async (req, res) => {
    const captains = await prisma.captain.findMany();
    res.json(captains);
});

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const captain = await prisma.captain.findUnique({ where: { id } });
    res.json(captain);
});

router.post("", async (req, res) => {
    try {
        const data = req.body;
        const captain = await prisma.captain.create({ data });
        res.status(201).json(captain);
    } catch (error) {
        const message = "No se ha podido crear el capitán";
        res.status(400).json({ message });
    }
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

module.exports = router;
