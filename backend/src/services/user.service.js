const prisma = require("../lib/db");

const getAll = async (userId) => {
  try {
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

    return events;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const create = async (user) => {
  try {
    const response = await prisma.user.create({ data: user });
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { getAll, create };
