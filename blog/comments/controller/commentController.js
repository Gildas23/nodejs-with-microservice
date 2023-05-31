import {randomBytes} from "crypto";

let commentsByPost = {}

const getComments = (req,res,next)=>{
    res.status(200).json({
        status:"success",
        data:commentsByPost[req.params.id]
    })
}

const createComment = (req,res,next)=>{
    const commentId = randomBytes(4).toString('hex')
    const {content} = req.body

    const comments = commentsByPost[req.params.id] || []

    comments.push({id:commentId,content})
    commentsByPost[req.params.id] = comments

    res.status(200).json({
        status:"success",
        data:commentsByPost
    })
}

export {getComments,createComment}