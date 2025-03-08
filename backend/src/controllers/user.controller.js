const prisma = require("../lib/db");

const getAll = async (req, res) => {
  try {
    const { userId } = req.params;
    let { page, pageSize } = req.query;
    if (!page) page = 1;
    if (!pageSize) pageSize = 10;
    const user = await prisma.user.findFirst({
      where: { id: userId },
      include: { tickets: { include: { event: true } } },
    });

    const events = user.tickets.map((ticket) => {
      return {
        ticketId: ticket.id,
        userId: ticket.userId,
        events: ticket.eventId,
        name: ticket.event.name,
        date: ticket.event.date,
      };
    });

    const response = {
      currentPage: page,
      pageSize: pageSize,
      totalPages: 0,
      events: events,
    };
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { getAll };
