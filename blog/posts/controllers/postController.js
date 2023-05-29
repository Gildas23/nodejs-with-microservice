import Posts from "../models/postModel.js";
import {randomBytes} from "crypto"

const getPosts = (req,res,next)=>{
    res.status(200).json({
        status:'success',
        data:Posts
    });
}

const createPost = (req,res,next)=>{
    const post = ({title,message} = req.body)
    post.id = randomBytes(4).toString('hex')
    Posts.push(post)

    res.status(200).json({
        status:'success',
        data:{
            addedPost:post
        }
    })
}

export {getPosts,createPost}