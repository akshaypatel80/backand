const express = require("express");
const { Post } = require("../model/post.model");
const postRouter = express();

postRouter.use(express.json());

postRouter.post("/add", async (req, res) => {
  const log = req.body;
  try {
    const data = new Post(log);
    await data.save(data);
    res.send("post add");
  } catch (error) {
    res.send("somting was wrong");
  }
});

postRouter.get("/", async (req, res) => {
  try {
    let data = await Post.find();
    res.send(data);
  } catch (error) {
    res.send("somting was wrong");
  }
});

module.exports = { postRouter };
