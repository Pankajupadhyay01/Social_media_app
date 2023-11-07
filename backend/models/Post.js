const mongoose = require("mongoose")

const post_schema = mongoose.Schema({
    caption: String,
    imgUrl: {
        public_id: String,
        Url: String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ]
})

module.exports = mongoose.model("posts", post_schema)