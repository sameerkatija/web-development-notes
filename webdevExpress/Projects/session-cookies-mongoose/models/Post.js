const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  desc: {
    type: String,
    require: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
