const { Router } = require("express");
const eventController = require("../controllers/event.controller");

const router = Router();

router.post("/", eventController.create);

module.exports = router;
