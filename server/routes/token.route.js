const express = require("express");
const router = express.Router();
const controller = require("../controllers/token.controller");

router.post("/token_transfer", controller.tokenTransfer);
router.post("/faucet", controller.faucet);
router.post("/mint", controller.mint);
router.get("/metadata/:tokenId", controller.metadata);
router.get("/count", controller.count);
module.exports = router;