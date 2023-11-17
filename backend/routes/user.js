const express = require("express")
const { createUser, login, logout, updatePass, updateProfile, findUser, profile, getAlluser, follow } = require("../controllers/userController")
const { isAuth } = require("../midlleware/auth")

const router = express.Router()

router.route("/user/create").post(createUser)

router.route("/user/login").post(login)

router.route("/user/logout").get(logout)

router.route("/user/updatepass").put(isAuth, updatePass)

router.route("/user/updateprofile").put(isAuth, updateProfile)

router.route("/user/finduser/:id").get(isAuth, findUser)

router.route("/user/profile").get(isAuth, profile)

router.route("/user/getalluser").get(isAuth, getAlluser)

router.route("/user/follow/:id").get(isAuth, follow)


module.exports = router 
