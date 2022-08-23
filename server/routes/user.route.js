const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
const logincontroller = require("../controllers/login.controller");
const logoutcontroller = require("../controllers/logout.controller");

router.post("/join", controller.user_join);
router.post("/login", logincontroller.user_login);
router.post("/logout", logoutcontroller.user_logout);
// router.post("/transfer", controller.user_transfer);
module.exports = router;
