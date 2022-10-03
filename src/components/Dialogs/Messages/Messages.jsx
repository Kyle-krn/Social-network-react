import style from './Messages.module.css';
import React from 'react';


const Message = (props) => {
    return (
        <div mes={props.messageId} className={props.userId===1? `${style.messages__item} ${style.my__message}`: style.messages__item}>{props.message}</div>
    )
}

const Messages = (props) => {

    let TextAreaRef = React.createRef(); 
    let onSendMessage = () => props.SendMessage(1)
    const onChangeMessage = () => props.ChangeMessage(TextAreaRef.current.value);

    return (
        <div className={style.messages}>
            <div className={style.messages__items}>
                {props.MessagesData.map(el => <Message key={el.id} messageId={el.id} userId={el.senderId} message={el.message}/>)}
            </div>
            <div className={style.sendMessageBlock}>
                <textarea onChange={onChangeMessage} ref={TextAreaRef} value={props.MessageTextInput} />
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages;