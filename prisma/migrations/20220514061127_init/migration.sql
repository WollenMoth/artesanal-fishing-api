-- AlterTable
ALTER TABLE "Captain" ALTER COLUMN "state" DROP DEFAULT,
ALTER COLUMN "state" SET DATA TYPE VARCHAR(255);