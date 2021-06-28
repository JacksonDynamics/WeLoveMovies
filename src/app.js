if (process.env.USER) require("dotenv").config();

const express = require("express");
const app = express();
const cors =require("cors")

const errorHandler = require("./errors/errorHandler")
const notFound = require("./errors/notFound")

app.use(express.json)
app.use(cors())


// Not found Handler
app.use(notFound)

// Error handler
app.use(errorHandler)

module.exports = app;
