import {toggleFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
    } from './../../redux/usersReducer'
import {connect} from 'react-redux';
import React from 'react';
import Users from './Users';
import * as axios from "axios";
import Preloader from '../common/Preloader/Preloader';


class UsersAPIComponent extends React.Component {
    getUsers = () => {
        this.props.toggleIsFetching()
        axios.get(`http://localhost:8000/users/profiles/?page=${this.props.currentPage}&page_size=${this.props.pageSize}`)
        .then(res => {
            this.props.toggleIsFetching()
            this.props.setUsers(res.data.results);
            this.props.setTotalUsersCount(res.data.count)
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    setCurrentPage = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.toggleIsFetching()
        axios.get(`http://localhost:8000/users/profiles/?page=${numberPage}&page_size=${this.props.pageSize}`)
        .then(res => {
            this.props.setUsers(res.data.results);
            this.props.toggleIsFetching()
        })
    }

    render() {
        return (
        <>
        { this.props.isFetching? <Preloader /> : 
        
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               setCurrentPage={this.setCurrentPage}
               toggleFollow={this.props.toggleFollow}
               />}
        
        </>)
            
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent);