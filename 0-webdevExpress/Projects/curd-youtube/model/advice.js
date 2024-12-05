const mongoose = require("mongoose");

const adviceSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  advice: {
    type: String,
    required: true,
  },
});

const Advice = mongoose.model("Advice", adviceSchema);
module.exports = Advice;
