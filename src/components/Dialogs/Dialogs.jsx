import style from './Dialogs.module.css';
import DialogsItemsContainer from './DialogsItems/DialogsItems';
import MessagesContainer from './Messages/Messages';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs__content}>
            <DialogsItemsContainer /> 
            <MessagesContainer />
        </div>
    )
}

export default Dialogs;