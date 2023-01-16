const mongoose = require("mongoose");

const postSchama = mongoose.Schema({
  title: String,
  body: String,
  device: String,
});
const Post = mongoose.model("post", postSchama);
module.exports = { Post };
