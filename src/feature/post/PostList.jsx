import { useSelector, useDispatch } from "react-redux";
import { selectPost } from "./postSlice";
import './PostList.css'

import React from 'react'

const PostList = () => {
    const posts = useSelector(selectPost);
    const dispatch = useDispatch();

    const renderPost = posts.map(post =>(
    <article key={post.id} className="postList">
    <h3>{post.title}</h3>
    <p>{post.content.substring(0, 100)}</p>
    </article>    
    ))
  return (
    <div>
      <h2>Post</h2>
      {renderPost}
    </div>
  )
}

export default PostList
