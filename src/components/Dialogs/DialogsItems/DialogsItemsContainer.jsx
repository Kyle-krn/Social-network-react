import {connect} from 'react-redux';
import DialogsItems from './DialogsItems';

let mapStateToProps = (state) => {
    return {
        DialogsData: state.dialogsPage.DialogsData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};


const DialogsItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsItems);

export default DialogsItemsContainer;