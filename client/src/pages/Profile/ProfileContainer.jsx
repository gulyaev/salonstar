import React, { useState, useEffect } from "react";
import { setUserProfile } from '../../redux/profile-reducer';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Profile from "./Profile";
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';

const ProfileContainer = (props) => {
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();

    let userId = props.match.params.userId;

    if (!userId) {
        userId = "61460a3874cd146ed0b3499f";
    }

    useEffect(async () => {
        try {
            const data = await request(`/api/profile/profile/` + userId, 'GET');
            console.log('Data1', data);
            props.setUserProfile(data);
        } catch (e) {

        }
    }, [userId])
  debugger; 
    return (
        <>
            {
                <Profile state={props.state} dispatch={props.dispatch} profile={props.profile} />
            }
        </>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    //isAuth: state.auth.isAuth
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithURLDataContainerComponent);