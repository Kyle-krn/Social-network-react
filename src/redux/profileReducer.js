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
            let stateCopy = {...state};
            stateCopy.PostsData = [...state.PostsData];
            stateCopy.PostsData.push(newPost);
            stateCopy.newPostText = '';
            // state.PostsData.push(newPost);
            // state.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:{ 
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            // state.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default profileReducer;