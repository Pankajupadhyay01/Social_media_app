const User = require("../models/User")

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
            res.status(200).cookie("token", token).json({
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