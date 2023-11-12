const mongoose = require("mongoose")
var mongodb = require('mongodb');
const post_schema = new mongoose.Schema({
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

module.exports = new mongoose.model("posts", post_schema)