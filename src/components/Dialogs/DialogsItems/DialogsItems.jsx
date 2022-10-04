import style from './DialogsItems.module.css';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';


const DialogsItems = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                {props.DialogsData.map(el => (
                <div className={style.dialogs__item}>
                    <NavLink className={NavData => NavData.isActive? style.active: ''} to={`/dialogs/${el.id}`}>{el.name}</NavLink>
                </div>))}
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        DialogsData: state.dialogsPage.DialogsData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsItems);