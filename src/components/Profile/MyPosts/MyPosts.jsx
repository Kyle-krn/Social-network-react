import style from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profileReducer'
import {connect} from 'react-redux';

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


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        PostsData: state.profilePage.PostsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {dispatch(onPostChangeActionCreator(text))},
        addPost: () => {dispatch(addPostActionCreator())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);