const { Router } = require("express");
const ticketController = require("../controllers/ticket.controller");

const router = Router();

router.post("/", ticketController.create);

module.exports = router;
