import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectUserPost } from '../user/userSlice';

const AddFormPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const dispatch = useDispatch();
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const users = useSelector(selectUserPost)
    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value)
    const onAuthorChange = (e) => setUserId(e.target.value)
    const onSavedPostClicked = () =>{
        if(title && content){
            dispatch(
                postAdded(title,content)
            )
            setTitle("");
            setContent("")
        }
    }

    const userOptions = users.map((user) =>(
        <option key={user.id} value={user.id}>
        {user.name}
        </option>
    ))
  return (
    <section>
        <h2>Add New Post</h2>


        
        <form>
        <label htmlFor='postTitle'>Title</label>
        <input
        type='text'
        value={title}
        id="postTitle"
        name='postTitle'
        onChange={onTitleChange}
        />
        <br/>


        <label htmlFor='postAuthor'>Author:</label>
        <select id='postAuthor' value={userId} onChange={onAuthorChange}>
        <option value=""></option>
        {userOptions}
        </select>

        <br/>



        <label htmlFor='postContect'>content:</label>
        <textarea rows={4}
        type='text'
        value={content}
        id="postContent"
        name='postContent'
        onChange={onContentChange}
        />
        </form>
        <br/>
        <button type='button'
        onClick={onSavedPostClicked}
        disabled={!canSave}>Save Post</button>
    </section>
  )
}

export default AddFormPost
