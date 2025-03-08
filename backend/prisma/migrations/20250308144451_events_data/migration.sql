-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "eventImage" TEXT NOT NULL DEFAULT 'https://via.placeholder.com/600/92c952',
ADD COLUMN     "ticketPrice" DOUBLE PRECISION NOT NULL DEFAULT 10;
