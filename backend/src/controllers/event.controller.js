const prisma = require("../lib/db");
const eventService = require("../services/event.service");

const getAll = async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    if (!page) page = 1;
    if (!pageSize) pageSize = 10;
    let events = [];
    events = await eventService.getAll();
    const totalEvents = events.length;

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

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventService.getById(id);
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const create = async (req, res) => {
  try {
    const event = req.body;
    delete event.id;
    const newEvent = await eventService.create(event);
    res.status(201).json(newEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { getAll, getById, create };
