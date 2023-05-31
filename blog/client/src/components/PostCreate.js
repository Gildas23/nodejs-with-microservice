import React,{useState} from 'react'
import PostList from './PostList'

const PostCreate = () => {
    const [title,setTitle] = useState('')


    const handleSubmit = async(event)=>{
        event.preventDefault()
        await  fetch('http://localhost:5000/blog/api/v1/posts', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})
          })
        
        setTitle('') 
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Title</label>
                <input value={title} onChange={e=>setTitle(e.target.value)} className='form-control'/>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
        <hr/>
        <h1>Posts</h1>
        <PostList/>
    </div>
  )
}

export default PostCreate