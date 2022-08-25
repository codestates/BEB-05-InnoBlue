const express = require("express");
const router = express.Router();
const controller = require("../controllers/token.controller");

router.post("/token_transfer", controller.tokenTransfer);
router.post("/faucet", controller.faucet);


module.exports = router;