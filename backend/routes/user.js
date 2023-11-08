const express = require("express")
const { createUser, login } = require("../controllers/userController")

const router = express.Router()

router.route("/user/create").post(createUser)
router.route("/user/login").post(login)

module.exports = router 
