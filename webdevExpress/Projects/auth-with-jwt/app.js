require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
// const session = require("express-session");
// const flash = require("connect-flash");
const User = require("./models/user");

// config the express app
const app = express();

// basic app setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// connecting to db
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Err occured during db connection");
  });

// middleware

const isAuth = (req, res, next) => {
  if (!req.signedCookies.auth) {
    res.redirect("/signin");
  }
  const token = req.signedCookies.auth;
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).redirect("/signin");
    }
    if (new Date(Date.now()).getTime() > new Date(decoded.exp).getTime()) {
      res.clearCookie("auth");
      res.redirect("/signin");
    }
    req.user = { name: decoded.name, email: decoded.email };
    next();
  });
};

// App routes

app.get("/", isAuth, (req, res) => {
  res.send("only for logged in user");
});

app.get("/signup", (req, res) => {
  if (req.signedCookies.auth) {
    return res.redirect("/");
  }
  res.render("register");
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email } = req.body;
    const password = await bcrypt.hash(
      req.body.password,
      Number(process.env.SALT_ROUND)
    );
    const user = new User({ name, email, password });
    await user.save();
    req.flash("success", "User Registered Successfully!");
    res.redirect("/signin");
  } catch (e) {
    return res.status(500).json({
      message: "There was an error on our side!",
    });
  }
});

app.get("/signin", (req, res) => {
  if (req.signedCookies.auth) {
    return res.redirect("/");
  }
  res.render("signin");
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User does not exist!" });
  }
  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    return res.status(404).redirect("/signin");
  }
  const exp = new Date(Date.now() + 3600000).getTime();
  const token = jwt.sign(
    { name: user.name, email: user.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: exp }
  );

  res.cookie("auth", `${token}`, {
    signed: true,
    expire: 360000,
    sameSite: "strict",
  });
  return res.redirect("/");
});

app.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/signin");
});

// server is listening
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
