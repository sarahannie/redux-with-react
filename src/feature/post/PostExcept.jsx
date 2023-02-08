import React from 'react'
import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

const PostExcept = ({ post }) => {
  return (
    <article className="postList">
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postAuthor">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export default PostExcept
