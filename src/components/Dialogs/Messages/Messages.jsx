import style from './Messages.module.css';
import React from 'react';
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../../redux/dialogsReducer';


const Message = (props) => {
    return (
        <div mes={props.messageId} className={props.userId===1? `${style.messages__item} ${style.my__message}`: style.messages__item}>{props.message}</div>
    )
}

const Messages = (props) => {
    let TextAreaRef = React.createRef(); 
    let ClickButton = () => props.dispatch(sendMessageActionCreator(1))
    const onMessageChange = () => props.dispatch(onMessageChangeActionCreator(TextAreaRef.current.value));

    return (
        <div className={style.messages}>
            <div className={style.messages__items}>
                {props.MessagesData.map(el => <Message key={el.id} messageId={el.id} userId={el.senderId} message={el.message}/>)}
            </div>
            <div className={style.sendMessageBlock}>
                <textarea onChange={onMessageChange} ref={TextAreaRef} value={props.MessageTextInput} />
                <button onClick={ClickButton}>Send</button>
            </div>
        </div>
    )
}

export default Messages;