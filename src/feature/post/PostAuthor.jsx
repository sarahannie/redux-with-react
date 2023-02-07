import { useSelector } from "react-redux";
import { selectUserPost } from "../user/userSlice";

import React from 'react'

const PostAuthor = ({userId}) => {
  const users = useSelector(selectUserPost);
  const author = users.find(user=> user.id === userId)
  return<span>by {author? author.name:"Unknown author"}</span>
}

export default PostAuthor
