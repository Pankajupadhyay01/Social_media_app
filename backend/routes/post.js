const express = require("express")
const { createpost, comment, deletePost, updatePost } = require("../controllers/post")
const { isAuth } = require("../midlleware/auth")

const router = express.Router()

router.route("/post/create").post(isAuth, createpost)
router.route("/post/delete/:id").delete(isAuth, deletePost)
router.route("/post/comment/:id").put(isAuth, comment)
router.route("/post/update/:id").put(isAuth, updatePost)


module.exports = router