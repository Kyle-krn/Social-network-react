import Messages from "./Messages"
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../../redux/dialogsReducer';
import StoreContext from "../../../storeContext";

const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>{ 
            (store) => (
                <Messages MessagesData={store.getState().dialogsPage.MessagesData}
                          MessageTextInput={store.getState().dialogsPage.newMessageText}
                          SendMessage={(senderId) => store.dispatch(sendMessageActionCreator(senderId))}
                          ChangeMessage={(text) => store.dispatch(onMessageChangeActionCreator(text))}/>
            )
        }</StoreContext.Consumer>
    )
}

export default MessagesContainer;