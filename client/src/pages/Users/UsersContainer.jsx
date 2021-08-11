import React from 'react';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from '../../redux/users-reducer';
import UserItem from "../UserItem/UserItem";
import Users from "./Users";
import {connect} from "react-redux";
const axios = require('axios').default;

function UsersContainer(props) {

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        axios.get(`/api/users/getusers?page=${pageNumber}&limit=${props.pageSize}`)
            .then(res => {
                props.setUsers(res.data.results);
            });
    }

    let getUsers = () => {
        if (props.usersData.length === 0) {
            axios.get(`/api/users/getusers?page=${props.currentPage}&limit=${props.pageSize}`)
                .then(res => {
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

    let usersElements = props.state.usersPage.usersData.map(user => (<UserItem name={user.name} id={user._id} image={user.userImage} />));
    let pagesCount = Math.ceil(props.state.usersPage.totalUsersCount / props.state.usersPage.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <Users getUsers={getUsers} onPageChanged={onPageChanged} pages={pages} usersElements={usersElements} currentPage={props.currentPage}/>
    );
}

let mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage 
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId)=>{dispatch(followActionCreator(userId));},
		unfollow: (userId)=>{dispatch(unfollowActionCreator(userId));},
        setUsers: (users)=>{dispatch(setUsersActionCreator(users));},
		setCurrentPage: (pageNumber)=>{dispatch(setCurrentPageActionCreator(pageNumber));},
		setTotalUsersCount: (totalCount)=>{dispatch(setTotalUsersCountActionCreator(totalCount));}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
