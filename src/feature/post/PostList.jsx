import { useSelector, useDispatch } from "react-redux";
import { selectPost, getPostsStatus, getPostsError, fetchPosts } from "./postSlice";
import { useEffect } from "react";
import PostExcept from "./PostExcept";
import './PostList.css';


 

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPost);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() =>{
      if(postsStatus === 'idie'){
        dispatch(fetchPosts())
      }
    }, [postsStatus, dispatch])

   let content;
   if(postsStatus === 'loading'){
    content = <p>"Loading..."</p>
   } else if(postsStatus === 'succeeded'){
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content= orderedPosts.map(post => <PostExcept key={post.id} post={post}/>)
   } else if (postsStatus === 'failed'){
    content = <p>{error}</p>
   }


  return (
    <div>
      <h2>Post</h2>
      {content}
    </div>
  )
}

export default PostList
