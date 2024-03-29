const express = require("express")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")

const app = express()


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// importing and using router 
const userRouter = require("./routes/user")
const postRouter = require("./routes/post")

app.use("/api/v1", userRouter) 
app.use("/api/v1", postRouter) 


// path for env file set up
if (process.env.NODE_ENV !== "production ") {
    require("dotenv").config({ path: "./backend/config/config.env" })
}

module.exports = app