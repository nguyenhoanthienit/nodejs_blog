const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  // GET courses/:slug
  show(req, res, next) {
    // console.log("Log from course controller " + req.params.slug);
    Course.findOne({
      slug: req.params.slug,
    })
      .then((course) =>
        res.render("courses/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // GET courses/create -> go to UI
  create(req, res, next) {
    res.render("courses/create");
  }

  // POST courses/store
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // GET courses/:id/edit -> bind data to UI
  edit(req, res, next) {
    Course.findById(req.params._id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // PUT courses/:id/ -> update to db
  update(req, res, next) {
    Course.updateOne({ _id: req.params._id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // DELETE courses/:id/
  destroy(req, res, next) {
    Course.delete({ _id: req.params._id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // PATCH courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params._id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // FORCE DELETE courses/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params._id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // POST /handle-form-actions -> multiple execute for course
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "Delete":
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;

      default:
        res.send("Please choose action");
        break;
    }
  }
}

module.exports = new CourseController();
