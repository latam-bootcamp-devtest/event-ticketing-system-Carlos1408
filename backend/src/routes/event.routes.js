const { Router } = require("express");
const eventController = require("../controllers/event.controller");

const router = Router();

router.get("/", eventController.getAll);
router.post("/", eventController.create);

module.exports = router;
