-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'Concer event',
ALTER COLUMN "eventImage" SET DEFAULT 'http://localhost:3000/concert.jpg';
