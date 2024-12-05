const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const User = require("./models/User");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
const URL = "mongodb://localhost:27017/backend";

mongoose
  .connect(URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database connection error:", err));

app.get("/", async (req, res) => {
  const data = await User.find({});
  res.render("index", { data });
});

app.post("/", async (req, res) => {
  const { add } = req.body;
  const user = new User({ name: add });
  await user.save();
  res.redirect("/");
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await User.deleteOne({ _id: id });
  res.redirect("/");
});

app.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById({ _id: id });
  res.render("editPage", { user });
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { add } = req.body;
  await User.updateOne(
    { _id: id },
    {
      $set: {
        name: add,
      },
    }
  );
  res.redirect("/");
});

const PORT = 3012;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
