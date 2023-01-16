require("dotenv").config();
const express = require("express");
const { connect } = require("./config/db");
const { login } = require("./router/register.router");
const { postRouter } = require("./router/post.router");
const { authentication } = require("./Middleware/Authentication");
const app = express();
const port = process.env.port;
app.use("/users", login);
app.use(authentication);
app.use("/posts", postRouter);
app.listen(port, async () => {
  try {
    await connect;
    console.log(`http://localhost:${port}`);
  } catch (error) {
    console.log("connecttion is fall");
  }
});
