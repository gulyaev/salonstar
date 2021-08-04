import React from 'react';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from '../../redux/users-reducer';
import Users from './Users';
import {connect} from "react-redux";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
