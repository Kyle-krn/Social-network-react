import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profileReducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext';

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => (
            <MyPosts newPostText={store.getState().profilePage.newPostText} 
                     PostsData={store.getState().profilePage.PostsData} 
                     updateNewPostText={(text) => store.dispatch(onPostChangeActionCreator(text))} 
                     addPost={() => store.dispatch(addPostActionCreator())}/>
            )
        }</StoreContext.Consumer>
        );
}

export default MyPostsContainer;