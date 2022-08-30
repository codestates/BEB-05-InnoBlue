const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
const logincontroller = require("../controllers/login.controller");
const logoutcontroller = require("../controllers/logout.controller");

router.post("/signup", controller.signup);
router.post("/login", logincontroller.user_login);
router.post("/logout", logoutcontroller.user_logout);
router.get("/userinfo/:userId", controller.userinfo);
module.exports = router;
