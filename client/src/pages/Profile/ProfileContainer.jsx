import React, { useState, useEffect } from "react";
import {
    setUserProfile
} from '../../redux/profile-reducer';
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
        userId="6130956732d75f01f59c4233";
    }


    useEffect(async () => {
        try {
            const data = await request(`/api/profile/profile/` + userId, 'GET');
            console.log('Data', data);
            props.setUserProfile(data);
        } catch (e) {

        }
    }, [])
    debugger;
    return (
        <>
            <Profile state={props.state} dispatch={props.dispatch} profile={props.profile} />
        </>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithURLDataContainerComponent = withRouter (ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithURLDataContainerComponent);