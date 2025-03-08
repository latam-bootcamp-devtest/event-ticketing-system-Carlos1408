const prisma = require("../lib/db");
const { connect } = require("../routes/event.routes");

const create = async (req, res) => {
  try {
    const ticket = req.body;
    delete ticket.id;
    const newticket = await prisma.ticket.create({
      data: {
        userId: ticket.userId,
        event: { connect: { id: ticket.event_id } },
      },
    });
    res.status(201).json(newticket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const bookTicket = async (req, res) => {
  try {
    const { eventId, customerName } = req.body;
    const user = await prisma.user.findFirst({ where: { name: customerName } });
    const newTicket = await prisma.ticket.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        event: {
          connect: { id: parseInt(eventId) },
        },
      },
    });
    const event = await prisma.event.findFirst({
      where: { id: parseInt(eventId) },
    });
    await prisma.event.update({
      where: { id: eventId },
      data: {
        availableSeats: event.availableSeats - 1,
      },
    });
    return newTicket;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await prisma.ticket.findFirst({ where: { id } });
    if (!id) throw new Error("Missing id");
    if (!ticket) throw new Error("Not found");
    await prisma.ticket.delete({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};

module.exports = { create, deleteById, bookTicket };
