import React from 'react';
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunkCreator,
    onPageChangedThunkCreator
} from '../../redux/users-reducer';
import UserItem1 from "../UserItem/UserItem1";
import Users from "./Users";
import { connect } from "react-redux";
const axios = require('axios').default;

function UsersContainer(props) {

    let onPageChanged = (pageNumber) => {
            props.onPageChangedThunkCreator(pageNumber, props.pageSize);
    };

    let getUsers = () => {
        if (props.usersData.length === 0) {
            props.getUsersThunkCreator(props.currentPage, props.pageSize);
        }
    };

    //debugger;

    let usersElements = props.state.usersPage.usersData.map(user => (<UserItem1 name={user.name} login={user.login} id={user._id} image={user.userImage} followed={true} />));
    let pagesCount = Math.ceil(props.state.usersPage.totalUsersCount / props.state.usersPage.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    

    return (
        <Users getUsers={getUsers} onPageChanged={onPageChanged} pages={pages} usersElements={usersElements} currentPage={props.currentPage} />
    );
}

let mapStateToProps = (state) => {
    return {
        //usersPage: state.usersPage,
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunkCreator,
    onPageChangedThunkCreator
})(UsersContainer);
