const express = require("express");
const PATH = require("path");
const port = 3000;
const morgan = require("morgan");
const { engine } = require("express-handlebars");

// use express
const app = express();

// serve static files
console.log(__dirname);
app.use(express.static(PATH.join(__dirname, "public")));

// use css
// add watch to package json and add --watch

// http logger
app.use(morgan("combined"));

// template engine
// app.engine("handlebars", engine());
// app.set("view engine", "handlebars");

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.set("views", PATH.join(__dirname, "resources/views"));

// routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
