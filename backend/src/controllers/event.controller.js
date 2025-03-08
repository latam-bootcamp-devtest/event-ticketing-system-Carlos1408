const prisma = require("../lib/db");

const getAll = async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    if (!page) page = 1;
    if (!pageSize) pageSize = 10;
    const events = await prisma.event.findMany();

    const response = {
      currentPage: page,
      pageSize: pageSize,
      totalPages: events.length / pageSize,
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
    const event = req.body;
    delete event.id;
    const newEvent = await prisma.event.create({ data: event });
    res.json(newEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { getAll, create };
