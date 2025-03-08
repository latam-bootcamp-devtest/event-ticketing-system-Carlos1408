const prisma = require("../lib/db");

const create = async (eventId, customerName, ticketQuantity) => {
  try {
    let user = await prisma.user.findFirst({ where: { name: customerName } });
    if (!user)
      user = await prisma.user.create({ data: { name: customerName } });
    const newTicket = await prisma.ticket.create({
      data: {
        ticketQuantity: ticketQuantity,
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
        availableSeats: event.availableSeats - ticketQuantity,
      },
    });
    return newTicket;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteById = async (id) => {
  try {
    const ticket = await prisma.ticket.findFirst({ where: { id } });
    if (!id) throw new Error("Missing id");
    if (!ticket) throw new Error("Not found");
    await prisma.ticket.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { create, deleteById };
