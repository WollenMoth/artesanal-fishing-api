-- CreateTable
CREATE TABLE "Captain" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Captain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boat" (
    "id" SERIAL NOT NULL,
    "idCaptain" INTEGER NOT NULL,
    "idCompany" INTEGER NOT NULL,
    "fishingDate" TIMESTAMP NOT NULL,
    "fishingLocation" VARCHAR(255) NOT NULL,
    "capture" TEXT NOT NULL,
    "zarpe" VARCHAR(255) NOT NULL,

    CONSTRAINT "Boat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Boat" ADD CONSTRAINT "Boat_idCaptain_fkey" FOREIGN KEY ("idCaptain") REFERENCES "Captain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boat" ADD CONSTRAINT "Boat_idCompany_fkey" FOREIGN KEY ("idCompany") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
