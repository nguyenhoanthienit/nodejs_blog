var express = require("express");
var router = express.Router();

console.log("courses.js route");
const courseController = require("../app/controllers/CourseController");

router.get("/:slug", courseController.show);

module.exports = router;
