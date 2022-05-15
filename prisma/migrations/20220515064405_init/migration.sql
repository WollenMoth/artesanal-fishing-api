/*
  Warnings:

  - You are about to drop the `Propuesta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Propuesta";

-- CreateTable
CREATE TABLE "Proposal" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "proposal" TEXT NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);
