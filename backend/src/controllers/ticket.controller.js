const prisma = require("../lib/db");
const ticketService = require("../services/ticket.service");

const create = async (req, res) => {
  try {
    const { eventId, customerName, ticketQuantity } = req.body;
    const newTicket = await ticketService.create(
      eventId,
      customerName,
      ticketQuantity
    );
    res.status(201).json(newTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ticketService.deleteById(id);
    if (!result) throw new Error("Error");
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};

module.exports = { create, deleteById };
