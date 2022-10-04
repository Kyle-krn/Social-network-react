import {connect} from 'react-redux';
import FriendsBlock from './FriendsBlock';

let mapStateToProps = (state) => {
    return {
        FriendsData: state.sidebarPage.FriendsData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

const FriendsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBlock);

export default FriendsBlockContainer;