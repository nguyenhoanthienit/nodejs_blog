var express = require("express");
var router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:_id/edit", courseController.edit);
router.delete("/:_id", courseController.destroy);
router.delete("/:_id/force", courseController.forceDestroy);
router.patch("/:_id/restore", courseController.restore);
router.put("/:_id", courseController.update);
router.get("/:slug", courseController.show);


module.exports = router;
