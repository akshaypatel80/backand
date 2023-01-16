require("dotenv").config();
const express = require("express");
const { Register } = require("../model/register.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const login = express();
login.use(express.json());
const key = process.env.key;

login.post("/register", async (req, res) => {
  const { name, email, password, gender } = req.body;
  try {
    bcrypt.hash(password, 4, async (err, right_password) => {
      if (err) {
        console.log(err);
      } else {
        const card = new Register({
          name,
          email,
          password: right_password,
          gender,
        });
        await card.save();
        res.send("Register succsees fully");
      }
    });
  } catch (error) {
    res.send("somthin is wrong");
  }
});

login.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Register.find({ email });
    const hasPass = user[0].password;
    if (user.length > 0) {
      bcrypt.compare(password, hasPass, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, key);
          res.send({ msg: "login succsees", token: token });
        } else {
          res.send(err);
        }
      });
    }
  } catch (error) {
    console.log("somthin is wrong");
  }
});

module.exports = { login };
