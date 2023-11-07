const express = require("express")
const bodyParser = require("body-parser");
const router = require("./routes/post")
const app = express()

app.use(router)
app.use(bodyParser.urlencoded({ extended: false }))


if (process.env.NODE_ENV !== "production ") {
    require("dotenv").config({ path: "./backend/config/config.env" })
}

module.exports = app