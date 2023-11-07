const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Your Name"],
    },
    avatar: {
        public_id: String,
        url: String,
    },
    email: {
        type: String,
        required: [true, "Enter Your Email"],
        unique: [true, "Email Already exist"],
    },
    password: {
        type: String,
        required: [true, "Enter Your Pasword"],
        minlength: [6, "Password Length should be greater than 6 "],
    },
    post: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            }

        }
    ]
})

module.exports = new mongoose.model("users", userSchema)