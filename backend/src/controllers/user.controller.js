const prisma = require("../lib/db");
const userService = require("../services/user.service");

const getAll = async (req, res) => {
  try {
    const { userId } = req.params;
    let { page, pageSize } = req.query;
    if (!page) page = 1;
    if (!pageSize) pageSize = 10;

    const events = await userService.getAll(userId);

    const response = {
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
    const user = req.body;
    delete user.id;
    const newUser = await userService.create(user);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { getAll, create };
