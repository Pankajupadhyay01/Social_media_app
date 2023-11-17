const User = require("../models/User")
const Post = require("../models/Post")
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let isUser = await User.findOne({ email })

        if (isUser) {
            res.status(500).json({
                sucess: false,
                msg: "user Already exist"
            })
        }
        else {
            isUser = await User.create({ name, email, password })
            res.status(200).json({
                sucess: true,
                isUser
            })
        }
    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: err.message
        })
    }
}

// login function created 
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                sucess: false,
                msg: "no user found with this mail"
            })
        }

        let isMatch = await user.matchpass(password)

        if (!isMatch) {
            res.status(400).json({
                sucess: false,
                msg: "Incorrect password"
            })
        }

        else {
            const token = await user.genratetoken()
            res.status(200).cookie("token", token, { httpOnly: true }).json({
                sucess: true,
                user,
                token
            })
        }

    } catch (error) {
        res.status(500).json({
            sucess: false,
            msg: error
        })
    }
}

// logout user

exports.logout = async (req, res) => {
    try {
        res.status(200).cookie("token", null, { httpOnly: true }).json({
            sucess: true,
            msg: "logout sucessfull"
        })
    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: err.message
        })
    }
}

// update password

exports.updatePass = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        const { old_pass, new_pass } = req.body
        const match_pass = await user.matchpass(old_pass)
        if (match_pass) {
            user.password = new_pass
            await user.save()
            res.status(200).json({
                sucess: true,
                msg: "Password change suessfully"
            })
        } else {
            res.status(400).json({
                sucess: false,
                msg: "Please enter correct old password"
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess: false,
            msg: error.message
        })
    }
}

// update profile
exports.updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        const { name, email } = req.body

        if (user.name == name || user.email == email) {
            res.status(400).json({
                sucess: false,
                msg: "Same Name or email is present in the database"
            })
        }
        else {
            user.email = email
            user.name = name
            await user.save()
            res.status(200).json({
                sucess: true,
                msg: "Profile updated"
            })
        }
    } catch (error) {
        res.status(500).json({
            sucess: false,
            msg: error.message
        })
    }
}

// follow/unfollow
exports.follow = async (req, res) => {
    try {
        const usertofollow = await User.findById(req.params.id)
        const personal = await User.findById(req.user.id)

        if (!usertofollow) {
            res.status(500).json({
                sucess: false,
                msg: "user not found"
            })
        } else {
            usertofollow.follower.push(req.user.id)
            personal.following.push(usertofollow.id)
            usertofollow.save()
            personal.save()

            res.status(200).json({
                sucess: true,
                msg: "user followed"
            })

        }
    } catch (error) {
        res.status(500).json({
            sucess: false,
            msg: error.message
        })
    }
}

// find user
exports.findUser = async (req, res) => {
    try {
        const userId = req.params.id
        const isUser = await User.findById(userId).populate("post")
        if (!isUser) {
            res.status(400).json({
                sucess: false,
                msg: "User not found"
            })
        } else {
            res.status(200).json({
                sucess: true,
                msg: "user Found",
                isUser
            })
        }
    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: err.message
        })
    }
}

// show me my profile
exports.profile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("post")
        res.status(200).json({
            sucess: true,
            user
        })
    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: err.message
        })
    }
}
// delete my profile

// get all user
exports.getAlluser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json({
            sucess: true,
            user
        })
    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: err.message
        })
    }
}

