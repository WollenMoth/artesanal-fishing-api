const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        await prisma.Captain.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: "Capitan 1",
                email: "example@example.com",
                country: "Mexico",
                state: "Colima",
            },
        });

        await prisma.Company.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: "STOLT SEA FARM SA",
            },
        });

        await prisma.Boat.upsert({
            where: { id: 1 },
            update: {},
            create: {
                idCaptain: 1,
                idCompany: 1,
                fishingLocation: "-23.456453424234, 34.4545423",
                capture: "Salmon rojo",
                zarpe: "Manzanillo, Colima, Mexico",
            },
        });

        await prisma.Proposal.create({
            data: {
                name: "Usuario",
                email: "example@example.com",
                phone: "111 111 1111",
                proposal:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ornare lorem, sit amet hendrerit nibh semper et.",
            },
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();
