require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const MONGOURI = process.env.DB_URL;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const User = require("./model/user");
const Advice = require("./model/advice");

mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.error("DATABASE CONNECTION ERROR");
  });

const methodOverride = (req, res, next) => {
  const { _method } = req.query;
  if (_method) {
    if (
      _method.toLowerCase() === "put" ||
      _method.toLowerCase() === "patch" ||
      _method.toLowerCase() === "delete"
    )
      req.method = _method;
  }
  next();
};

app.use(methodOverride);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user", async (req, res) => {
  const users = await User.find({});
  res.render("user", { users });
});

app.post("/user", async (req, res) => {
  const { userName } = req.body;
  const user = new User({ userName });
  await user.save();
  res.redirect("/");
});

app.get("/user/:id/edit", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.render("editPage", { user });
});

app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { userName } = req.body;
  await User.updateOne(
    { _id: id },
    {
      $set: {
        userName,
      },
    }
  );
  res.redirect("/user");
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  await User.deleteOne({ _id: id });
  res.redirect("/user");
});

app.get("/advices", async (req, res) => {
  const advices = await Advice.find({}).populate("user_id");
  const users = await User.find({}); // mongoose
  const modifiesUser = [];

  for (user of users) {
    const adv = advices.filter((advice) => {
      return advice.user_id._id.equals(user._id);
    });

    modifiesUser.push({ ...user._doc, count: adv.length });
  }

  console.log(modifiesUser);
  res.render("advice", { advices, users: modifiesUser });
});

app.post("/advices", async (req, res) => {
  const { user, advice } = req.body;
  const adv_doc = new Advice({ user_id: user, advice });
  await adv_doc.save();
  res.redirect("/advices");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
