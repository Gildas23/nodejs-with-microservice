import Posts from "../models/postModel.js";
import {randomBytes} from "crypto"

let post = Posts

const getPosts = (req,res,next)=>{
    res.status(200).json({
        status:'success',
        data:Posts
    });
}

const createPost = (req,res,next)=>{
    let {title,message} = req.body
    const newPost = {title,message}
    post.id = randomBytes(4).toString('hex')
    Posts.push(newPost)
    console.log(Posts)
    res.status(200).json({
        status:'success',
        data:{
            addedPost:newPost
        }
    })
}

export {getPosts,createPost}