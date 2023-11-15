const express = require("express")
const { createUser, login, logout, updatePass } = require("../controllers/userController")
const { isAuth } = require("../midlleware/auth")

const router = express.Router()

router.route("/user/create").post(createUser)
router.route("/user/login").post(login)
router.route("/user/logout").get(logout)
router.route("/user/updatepass").put(isAuth, updatePass)


module.exports = router 
