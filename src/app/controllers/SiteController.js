const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  // GET /
  index(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render("home", {
          // if not toObject, no data can be get -> add toObject to fix the err of handlebars
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // GET /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
