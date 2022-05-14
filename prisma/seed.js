const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
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
                captainName: "Capitan 1",
                email: "example@example.com",
                country: "Mexico",
                state: "Colima",
                idCompany: 1,
                fishingLocation: "-23.456453424234, 34.4545423",
                capture: "Salmon rojo",
                zarpe: "Manzanillo, Colima, Mexico",
            },
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();
