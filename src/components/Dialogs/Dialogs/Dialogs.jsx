import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialogs__item}>
            <NavLink className={NavData => NavData.isActive? style.active: ''} to={`/dialogs/${props.DialogId}`}>{props.DiaologName}</NavLink>
        </div>
    )
}

const DialogsList = (props) => {

    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                {props.DialogsData.map(el => <DialogItem key={el.id} DialogId={el.id} DiaologName={el.name}/>)}
            </div>
        </div>
    )
}

export default DialogsList;