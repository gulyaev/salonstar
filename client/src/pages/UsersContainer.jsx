import React from 'react';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../redux/users-reducer';
import Users from './Users';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		usersData: state.usersPage.usersData,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId)=>{dispatch(followActionCreator(userId));},
		unfollow: (userId)=>{dispatch(unfollowActionCreator(userId));},
        setUsers: (users)=>{dispatch(setUsersActionCreator(users));}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
