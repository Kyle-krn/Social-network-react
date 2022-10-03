import style from './Dialogs.module.css';
import DialogsList from './Dialogs/Dialogs';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs__content}>
            <DialogsList DialogsData={props.DialogsData.DialogsData}/>
            <Messages MessagesData={props.DialogsData.MessagesData} MessageTextInput={props.DialogsData.newMessageText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Dialogs;