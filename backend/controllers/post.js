// importing post model 
const Post = require("../models/Post")

// function
exports.createpost = async (req, res) => {
    try {
        const postdata = req.body;
        Post.create(postdata)
    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: "Oops.. Something went wrong"
        })
    }
}