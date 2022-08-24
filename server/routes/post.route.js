const express = require("express");
const router = express.Router();
const controller = require("../controllers/post.controller");

router.get("/postlist", controller.postlist);
router.post("/writepost", controller.writepost);
router.get("/readpost", controller.readpost);
router.post("/updatepost", controller.updatepost);
router.post("/delpost", controller.delpost);


module.exports = router;