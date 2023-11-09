const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
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


userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    else {
        next()
    }
})

// comparing the password 
userSchema.methods.matchpass = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// genrating a tokken 

userSchema.methods.genratetoken = async function () {
    return jwt.sign({ _id: this._id }, process.env.JWT)
}

module.exports = new mongoose.model("users", userSchema)