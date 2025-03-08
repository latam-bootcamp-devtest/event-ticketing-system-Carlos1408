const { Router } = require("express");
const userController = require("../controllers/user.controller");

const router = Router();

router.get("/:userId/tickets", userController.getAll);

module.exports = router;
