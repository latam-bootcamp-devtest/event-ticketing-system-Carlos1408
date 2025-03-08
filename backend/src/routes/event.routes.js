const { Router } = require("express");
const eventController = require("../controllers/event.controller");

const router = Router();

router.get("/", eventController.getAll);
router.get("/:id", eventController.getById);
router.post("/", eventController.create);
router.delete("/:id", eventController.deleteById);

module.exports = router;
