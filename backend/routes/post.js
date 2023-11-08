const express = require("express")
const { createpost } = require("../controllers/post")
const { isAuth } = require("../midlleware/Auth")

const router = express.Router()

router.route("/post/create").post(isAuth, createpost)

module.exports = router