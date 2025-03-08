const prisma = require("../lib/db");

const getAll = async () => {
  try {
    const events = await prisma.event.findMany();
    return events;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getById = async (id) => {
  try {
    const event = await prisma.event.findFirst({ where: { id: parseInt(id) } });
    return event;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const create = async (event) => {
  try {
    delete event.id;
    const newEvent = await prisma.event.create({ data: event });
    return newEvent;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { getAll, getById, create };
