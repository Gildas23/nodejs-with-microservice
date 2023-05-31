import React,{useEffect, useState} from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = ()=> {
    const [posts,setPosts] = useState([])

    const fetchPost = async ()=>{
        try{
        const res = await (await fetch('http://localhost:5000/blog/api/v1/posts'))
        const jsonData = await res.json()
        setPosts(jsonData.data)
        console.log(jsonData.data)
        }catch(error){
        
        }

    }

    useEffect(()=>{
        fetchPost()
    },[])
    
    const renderedPosts = posts.map((post)=>{
        return (<div key={post.id} 
                    className='card' 
                    style={{width:'30%',marginBottom:'20px'}}>
                    
                    <div className='card-body'>
                        <h3>{post.title}</h3>
                        <CommentList postId={post.id}/>
                         <CommentCreate postId={post.id} />
                         
                    </div>
                </div>

                )
    })
    
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
    {renderedPosts}
    </div>
  )
}

export default PostList