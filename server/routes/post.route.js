const express = require("express");
const router = express.Router();
const controller = require("../controllers/post.controller");

router.get("/postlist", controller.postlist);
router.post("/writepost", controller.writepost);
router.get("/readpost/:id", controller.readpost);
router.put("/updatepost", controller.updatepost);
router.delete("/delpost", controller.delpost);


module.exports = router;