import React, { useState,useEffect } from 'react'

function CommentList({postId}) {
  const [commentList,setCommentList] = useState([])

  const fetchComments = async ()=>{
    try{
    const res = await (await fetch(`http://localhost:5001/blog/api/v1/posts/${postId}/comments`))
    const jsonData = await res.json()
    setCommentList(jsonData.data)
    console.log("dddd",jsonData.data)
    
    }catch(error){
    
    }
  
}

useEffect(()=>{
    fetchComments()
},[])

const renderedComments = commentList.map((comment)=>{
    return (
      <li key={comment.id}>{comment.content} </li>
            )
})

  return (
    <div>{renderedComments}</div>
  )
}

export default CommentList