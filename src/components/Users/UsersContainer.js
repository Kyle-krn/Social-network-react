import Users from './Users'
import {toggleFollowAC, showMoreUsersAC} from './../../redux/usersReducer'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {dispatch(toggleFollowAC(userId))},
        showMoreUsers: () => {dispatch(showMoreUsersAC())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);