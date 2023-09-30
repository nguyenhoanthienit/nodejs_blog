const Course = require("../models/Course");

class SiteController {
  // GET /
  index(req, res) {
    // res.render("home");
    Course.find()
      .then(function (models) {
        res.json(models);
      })
      .catch(function (err) {
        console.log("fail to get data");
      });
  }

  // GET /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
