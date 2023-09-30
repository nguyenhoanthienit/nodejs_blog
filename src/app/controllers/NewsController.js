class NewsController {
  // GET /
  index(req, res) {
    res.render("news");
  }

  // GET /show
  show(req, res) {
    res.send("news detail");
  }
}

module.exports = new NewsController();
