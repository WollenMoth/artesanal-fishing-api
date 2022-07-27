const { PrismaClient } = require("@prisma/client");
const express = require("express");
const router = express.Router();

const prisma = new PrismaClient();

router.get("", async (req, res) => {
    const proposals = await prisma.proposal.findMany();
    res.json(proposals);
});

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const proposal = await prisma.proposal.findUnique({ where: { id } });
    res.json(proposal);
});

router.post("", async (req, res) => {
    try {
        const data = req.body;
        const proposal = await prisma.proposal.create({ data });
        res.status(201).json(proposal);
    } catch (error) {
        const message = "No se ha podido crear la propuesta";
        res.status(400).json({ message });
    }
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

module.exports = router;
