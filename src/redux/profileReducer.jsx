const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.PostsData[state.PostsData.length -1].id + 1,
                post: state.newPostText,
                likesCount: 0
            };
            state.PostsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export default profileReducer;