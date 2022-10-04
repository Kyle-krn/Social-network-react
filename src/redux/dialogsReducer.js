const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const sendMessageActionCreator = (senderId) => ({type: SEND_MESSAGE, senderId: senderId})
export const onMessageChangeActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE, message: message})

const dialogsReducer = (state = {DialogsData: [], MessagesData: [], newMessageText: ''}, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
              id: 1,
              senderId: action.senderId,
              message: state.newMessageText
            };
            let copyState = {...state};
            copyState.MessagesData = [...state.MessagesData];
            copyState.MessagesData.push(newMessage);
            copyState.newMessageText = '';
            // state.MessagesData.push(newMessage);
            // state.newMessageText = '';
            return copyState;
        case UPDATE_NEW_MESSAGE:{
            let copyState = {...state};
            copyState.newMessageText = action.message;
            // state.newMessageText = action.message;
            return copyState;}
        default:
            return state;
      }
}

export default dialogsReducer;