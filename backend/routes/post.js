const express = require("express")
const { createpost, comment } = require("../controllers/post")
const { isAuth } = require("../midlleware/Auth")

const router = express.Router()

router.route("/post/create").post(isAuth, createpost)
router.route("/post/comment/:id").post(isAuth, comment)

module.exports = router