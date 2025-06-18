const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const app = express();
const User = require("./models/User");
const Post = require("./models/Post");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
const URL = "mongodb://localhost:27017/backend";
app.use(cookieParser("this is my secret key bla bla"));
app.use(
  session({
    secret: "your-secret-key", // Change this to a strong secret
    store: MongoStore.create({
      mongoUrl: URL,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, sameSite: "strict" }, // Set to true if using HTTPS
  })
);
app.use(flash());
mongoose
  .connect(URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database connection error:", err));

app.get("/", async (req, res) => {
  const user = await User.find({});
  const posts = await Post.find({}).populate("createdBy");
  res.cookie("last visit", Date.now(), {
    sameSite: "strict",
    maxAge: 3600000,
    signed: true,
  });
  res.render("index", { data: user, posts, message: req.flash("success") });
});

app.get("/cookies", (req, res) => {
  const cookie = req.signedCookies;
  res.send({ cookie });
});

app.get("/page", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have came to this page for ${req.session.count} times`);
});

app.get("/set-signed-cookie", (req, res) => {
  res.cookie("username", "JohnDoe", {
    signed: true, // signing the cookie
    maxAge: 900000,
  });
  res.send("Signed cookie has been set");
});

app.post("/", async (req, res) => {
  const { createdBy, add } = req.body;

  const post = new Post({ desc: add, createdBy });
  await post.save();
  req.flash("success", "Successfully! added to the database");
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
