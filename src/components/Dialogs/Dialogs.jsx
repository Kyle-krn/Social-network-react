import style from './Dialogs.module.css';
import DialogsList from './Dialogs/Dialogs';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs__content}>
            <DialogsList DialogsData={props.store.getState().dialogsPage.DialogsData}/>
            <MessagesContainer store={props.store}/>
        </div>
    )
}

export default Dialogs;