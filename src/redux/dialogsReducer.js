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
            state.MessagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
      }
}

export default dialogsReducer;