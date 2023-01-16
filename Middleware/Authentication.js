require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const key = process.env.key;
const authentication = (req, res, next) => {
  const token = req.headers.auth;
  if (token) {
    const decode = jwt.decode(token, key);
    if (decode) {
      const userID = decode.userID;
      console.log(userID);
      next();
    } else {
      res.send("you are not rigth parson");
    }
  } else {
    res.send("somthing was wrog");
  }
};
module.exports = { authentication };
