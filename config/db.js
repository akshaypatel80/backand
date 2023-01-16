require("dotenv").config()
const mongoose = require("mongoose")
const mongourl = process.env.mongodbURL

const connect = mongoose.connect(mongourl)

module.exports = {connect}