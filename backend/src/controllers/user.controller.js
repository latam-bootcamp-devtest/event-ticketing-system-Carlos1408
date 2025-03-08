const prisma = require("../lib/db");

const getAll = async (req, res) => {
  try {
    const { userId } = req.params;
    let { page, pageSize } = req.query;
    if (!page) page = 1;
    if (!pageSize) pageSize = 10;
    const user = await prisma.user.findFirst({
      where: { id: parseInt(userId) },
      include: { tickets: { include: { event: true } } },
    });

    const events = user.tickets.map((ticket) => {
      return {
        ticketId: ticket.id,
        userId: ticket.userId,
        eventId: ticket.eventId,
        ticketQuantity: ticket.ticketQuantity,
        name: ticket.event.name,
        date: ticket.event.date,
        eventImage: ticket.event.eventImage,
      };
    });

    const response = {
      events: events,
    };
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const create = async (req, res) => {
  try {
    const user = req.body;
    delete user.id;
    const newUser = await prisma.user.create({ data: user });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { getAll, create };
