-- CreateTable
CREATE TABLE "Propuesta" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "proposal" TEXT NOT NULL,

    CONSTRAINT "Propuesta_pkey" PRIMARY KEY ("id")
);
