const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  // GET stored/courses
  storedCourses(req, res, next) {
    Promise.all([
      Course.find({}).sortable(req),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([courses, deletedCount]) =>
        res.render("me/stored-courses", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  // GET /me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  // GET stored/news
  storedNews(req, res) {
    res.send("Hello from news from me controller");
  }
}

module.exports = new MeController();
