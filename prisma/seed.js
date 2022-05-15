const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        await prisma.Boat.create({
            data: {
                fishingLocation: "-23.456453424234, 34.4545423",
                capture: "Pulpo",
                zarpe: "Playa de Mismaloya, Jalisco",
                captain: {
                    create: {
                        name: "Capitan 2",
                        email: "example2@example.com",
                        country: "Mexico",
                        state: "Jalisco",
                    },
                },
                company: {
                    create: {
                        name: "STOLT SEA FARM SA 4",
                    },
                },
            },
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();
