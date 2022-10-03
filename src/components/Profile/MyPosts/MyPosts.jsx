import style from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    }
    return (
        <div className={style.MyPostsBlock}>
            <h2>My posts</h2>
            <div className={style.AddPostBlock}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {props.PostsData.map(el => <Post key={el.id} message={el.post}/>)}
        </div>
    );
}

export default MyPosts;