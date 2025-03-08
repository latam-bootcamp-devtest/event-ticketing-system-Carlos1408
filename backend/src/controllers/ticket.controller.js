const prisma = require("../lib/db");

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

module.exports = { create };
