const express = require("express")
const { createpost } = require("../controllers/post")

const router= express.Router()

router.route("/post/create").post(createpost)

module.exports = router