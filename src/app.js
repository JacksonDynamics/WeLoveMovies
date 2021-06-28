if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

const cors =require("cors")

app.use(express.json)
app.use(cors())


module.exports = app;