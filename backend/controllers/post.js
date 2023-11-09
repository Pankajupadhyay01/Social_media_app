// importing post model 
const Post = require("../models/Post")
const User = require("../models/User")
// function
exports.createpost = async (req, res) => {
    try {
        const postdata = {
            caption: res.body,
            imgUrl: {
                public_id: "String",
                Url: "String",
            },
            owner: req.user._id,
        };
        const posts = await Post.create(postdata)

        const user = await User.findById(req.user._id)
        user.post.push(posts._id)
        await user.save()

        res.status(200).json({
            sucess: true,
            msg: "Post created sucessfully",
            posts
        })

    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: "Oops.. Something went wrong"
        })
    }
}

exports.comment = async (req, res) => {
    try {
        const message = {
            user: req.user._id,
            comment: req.body.comment
        }
        const post = await Post.findById(req.params.id)
        post.comments.push(message)
        await post.save()

        res.status(200).json({
            sucess: true,
            message: "comment sent sucessfully"
        })
    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: err.message
        })
    }
}