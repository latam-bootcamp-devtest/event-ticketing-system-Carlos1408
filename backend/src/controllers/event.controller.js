const prisma = require("../lib/db");

const getAll = async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    if (!page) page = 1;
    if (!pageSize) pageSize = 10;
    const totalEvents = await prisma.event.count();
    let events = [];
    if (totalEvents > pageSize)
      events = await prisma.event.findMany({
        take: pageSize,
        skip: (page - 1) * pageSize,
      });
    else {
      events = await prisma.event.findMany({});
      pageSize = events.length;
    }

    const response = {
      currentPage: page,
      pageSize: pageSize,
      totalPages: totalEvents / pageSize,
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
    res.status(201).json(newEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { getAll, create };
