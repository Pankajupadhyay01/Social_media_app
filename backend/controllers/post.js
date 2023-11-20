// importing post model 
const Post = require("../models/Post")
const User = require("../models/User")
// function
exports.createpost = async (req, res) => {
    try {
        const postdata = {
            caption: req.body.caption,
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
            msg: err.message
        })
    }
}

exports.deletePost = async (req, res) => {
    try {
        const id = req.params.id
        const ispost = await Post.findById(req.params.id);
        if (ispost) {
            if (ispost.owner.toString() == req.user.id.toString()) {

                await Post.findByIdAndDelete(id);
                const user = await User.findById(req.user.id);
                let index = user.post.findIndex(x => x._id == id)
                await user.post.splice(index, 1);
                await user.save()
                return res.status(200).json({
                    sucess: true,
                    msg: "Your post is Deleted"
                })
            }
            res.status(401).json({
                sucess: false,
                msg: "You are not allowed to delete"
            })
        }
        else {
            return res.status(401).json({
                sucess: false,
                msg: "No post found"
            })
        }
    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: err.message
        })
    }
}

// update post 
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const caption = req.body.caption
        if (post && post.owner == req.user.id) {
            post.caption = caption
            post.save( )
            res.status(200).json({
                sucess: false,
                msg: "post updated"
            })
        } else {
            res.status(400).json({
                sucess: false,
                msg: "post not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: err.message
        })
    }
}
// update comment 

// delete comment   

exports.comment = async (req, res) => {
    try {
        const message = {
            user: req.user._id,
            comment: req.body.comment
        }
        const post = await Post.findById(req.params.id)

        if (post) {
            post.comments.push(message)
            await post.save()
            return res.status(200).json({
                sucess: true,
                message: "comment sent sucessfully"
            })
        } else {
            return res.status(404).json({
                sucess: false,
                message: "Post not exist"
            })
        }

    } catch (err) {
        res.status(500).json({
            sucess: false,
            msg: err.message
        })
    }
}

