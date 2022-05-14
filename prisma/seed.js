const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const Captain = await prisma.Captain.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: "Capitan 1",
                email: "example@example.com",
                country: "Mexico",
                state: "Colima"
            },
        });

        const Company = await prisma.Company.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: "STOLT SEA FARM SA",
        
            },
        });

        const boat = await prisma.Boat.upsert({
            where: { id: 1 },
            update: {},
            create: {
                idCaptain: 1 ,
                idCompany: 1,
                fishingLocation: "-23.456453424234, 34.4545423",
                capture: "Salmon rojo",
                zarpe: "Manzanillo, Colima, Mexico"
            },
        });

    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();
