import React, { useState } from 'react'

function CommentCreate({postId}) {
    const [comment,setComment] = useState('')

    const handleSubmit = async(event)=>{
        event.preventDefault()
        await fetch(`http://localhost:5001/blog/api/v1/posts/${postId}/comments`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({content:comment})
          })
        
        setComment('')
        

    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <div className='form-group'>
                <label>new comment</label>
                <input value={comment} onChange={e=>setComment(e.target.value)} className='form-control'></input>
            </div>

            <button className='btn btn-primary'>Submit</button>
            
        </form>
    </div>
  )
}

export default CommentCreate