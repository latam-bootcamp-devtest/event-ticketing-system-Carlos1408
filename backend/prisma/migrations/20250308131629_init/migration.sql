-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "date" TIMESTAMP(3),
    "availableSeats" INTEGER,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);
