import Messages from "./Messages"
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../../redux/dialogsReducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        MessagesData: state.dialogsPage.MessagesData,
        MessageTextInput: state.dialogsPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: (senderId) => {dispatch(sendMessageActionCreator(senderId))},
        ChangeMessage: (text) => {dispatch(onMessageChangeActionCreator(text))}
    }
};


const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default MessagesContainer;