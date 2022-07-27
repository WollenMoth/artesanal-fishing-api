const { PrismaClient } = require("@prisma/client");
const express = require("express");
const router = express.Router();

const prisma = new PrismaClient();

router.get("", async (req, res) => {
    const companies = await prisma.company.findMany();
    res.json(companies);
});

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const company = await prisma.company.findUnique({ where: { id } });
    res.json(company);
});

router.post("", async (req, res) => {
    try {
        const data = req.body;
        const company = await prisma.company.create({ data });
        res.status(201).json(company);
    } catch (error) {
        const message = "No se ha podido crear la empresa";
        res.status(400).json({ message });
    }
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

module.exports = router;
