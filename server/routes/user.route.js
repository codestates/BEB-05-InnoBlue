const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.post("/join", controller.user_join);
// router.post("/login", controller.user_login);
// router.post("/transfer", controller.user_transfer);
module.exports = router;
