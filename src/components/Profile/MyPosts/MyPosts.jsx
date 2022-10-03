import style from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profileReducer'

const MyPosts = (props) => {
    
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        props.dispatch(onPostChangeActionCreator(newPostElement.current.value))
    }
    return (
        <div className={style.MyPostsBlock}>
            <h2>My posts</h2>
            <div className={style.AddPostBlock}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {props.PostsData.map(el => <Post key={el.id} message={el.post}/>)}
        </div>
    );
}

export default MyPosts;