const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

const profileReducer = (state = {PostsData: [], newPostText: ''}, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                post: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }; 
        default:
            return state;
    }
}

export default profileReducer;