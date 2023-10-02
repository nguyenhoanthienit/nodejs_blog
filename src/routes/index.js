const newsRouter = require("./news");
const coursesRouter = require("./courses");
const meRouter = require("./me");
const siteRouter = require("./site");

function route(app) {
  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  //   app.get("/search", (req, res) => {
  //     res.render("search");
  //   });
  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);

  //   app.post("/search", (req, res) => {
  //     console.log(req.body.keyword);
  //     res.render("search");
  //   });
}

module.exports = route;
