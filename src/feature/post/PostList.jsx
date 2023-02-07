import { useSelector } from "react-redux";
import { selectPost } from "./postSlice";
import './PostList.css';
import PostAuthor from "./PostAuthor";

import React from 'react'
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
    const posts = useSelector(selectPost);

    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
  

    const renderPost = orderedPosts.map(post =>(
    <article key={post.id} className="postList">
    <h3>{post.title}</h3>
    <p>{post.content.substring(0, 100)}</p>
    <p className="postAuthor">
      <PostAuthor userId={post.userId}/>
      <TimeAgo timestamp={post.date}/>
    </p>
    <ReactionButtons post={post}/>
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
