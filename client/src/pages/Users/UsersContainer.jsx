import React from 'react';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from '../../redux/users-reducer';
import UserItem1 from "../UserItem/UserItem1";
import Users from "./Users";
import { connect } from "react-redux";
const axios = require('axios').default;

function UsersContainer(props) {

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.toggleIsFetching(true);
        axios.get(`/api/users/getusers?page=${pageNumber}&limit=${props.pageSize}`)
            .then(res => {
                props.toggleIsFetching(false);
                props.setUsers(res.data.results);
            });
    }

    let getUsers = () => {
        if (props.usersData.length === 0) {
            props.toggleIsFetching(true);
            axios.get(`/api/users/getusers?page=${props.currentPage}&limit=${props.pageSize}`)
                .then(res => {
                    props.toggleIsFetching(false);
                    console.log(res.data);
                    //props.setUsers(res.data.results);
                    props.setTotalUsersCount(res.data.totalCount);
                    props.setUsers(res.data.results);
                })
                .catch(err => {
                    //Handle Error Here
                    console.error(err);
                });
        }
    };

    let usersElements = props.state.usersPage.usersData.map(user => (<UserItem1 name={user.name} id={user._id} image={user.userImage} followed={true}/>));
    let pagesCount = Math.ceil(props.state.usersPage.totalUsersCount / props.state.usersPage.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    //debugger;

    return (
        <Users getUsers={getUsers} onPageChanged={onPageChanged} pages={pages} usersElements={usersElements} currentPage={props.currentPage} />
    );
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);
