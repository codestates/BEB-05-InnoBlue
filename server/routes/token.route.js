const express = require("express");
const router = express.Router();
const controller = require("../controllers/token.controller");

router.post("/token_transfer", controller.tokenTransfer);



module.exports = router;