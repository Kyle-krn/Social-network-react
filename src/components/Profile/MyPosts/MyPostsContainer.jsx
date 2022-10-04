import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profileReducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {
//     return (
//         // <StoreContext.Consumer>{
//         //     (store) => (
//         //     <MyPosts newPostText={store.getState().profilePage.newPostText} 
//         //              PostsData={store.getState().profilePage.PostsData} 
//         //              updateNewPostText={(text) => store.dispatch(onPostChangeActionCreator(text))} 
//         //              addPost={() => store.dispatch(addPostActionCreator())}/>
//         //     )
//         // }</StoreContext.Consumer>
//         <MyPosts newPostText={props.store.getState().profilePage.newPostText} 
//                  PostsData={props.store.getState().profilePage.PostsData} 
//                  updateNewPostText={(text) => props.store.dispatch(onPostChangeActionCreator(text))} 
//                  addPost={() => props.store.dispatch(addPostActionCreator())}/>
//         );
// }

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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;