const mongoose = require("mongoose");

const register = mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  password: String,
});

const Register = mongoose.model("register", register);
module.exports = { Register };
