const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Steph", "Winston"];
  res.render("cats", { catsArr: cats });
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
