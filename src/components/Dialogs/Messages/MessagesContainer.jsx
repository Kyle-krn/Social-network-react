import Messages from "./Messages"
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../../redux/dialogsReducer';

const MessagesContainer = (props) => {
    
    const SendMessage = (senderId) => props.store.dispatch(sendMessageActionCreator(senderId))
    const ChangeMessage = (text) => props.store.dispatch(onMessageChangeActionCreator(text));

    let state = props.store.getState();
    return (<Messages MessagesData={state.dialogsPage.MessagesData}
                      MessageTextInput={state.dialogsPage.MessageTextInput}
                      SendMessage={SendMessage}
                      ChangeMessage={ChangeMessage}/>)
}

export default MessagesContainer;