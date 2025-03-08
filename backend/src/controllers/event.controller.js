const prisma = require("../lib/db");

const create = async (req, res) => {
  try {
    const event = req.body;
    delete event.id;
    const newEvent = await prisma.event.create({ data: event });
    res.json(newEvent);
    res.json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { create };
