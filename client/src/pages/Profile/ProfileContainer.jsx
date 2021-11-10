import React, { useState, useEffect, useContext, useCallback, useMemo } from "react";
import { setUserProfile, updateUserProfile } from '../../redux/profile-reducer';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Profile from "./Profile";
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
import { AuthContext } from '../../context/AuthContext';
import Loader from '../../components/Loader';
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();
    const auth = useContext(AuthContext);
    const [userProfile, setProfile] = useState();


    const globalStorage = JSON.parse(localStorage.getItem('userData'));//определен айди и токен

    let userId = props.match.params.userId;
    console.log("userId " + userId);

/*
    useEffect(
        async () => {
            if (!auth.ready) {
                return <Loader />
            }

            const authUserId = globalStorage.userId;

            if (!userId) {
                userId = authUserId;
            }

            try {
                const data = await request(`/api/profile/profile/` + userId, 'GET');
                console.log('Data1', data);
                //props.setUserProfile(data);
                setProfile(data);
                console.log('Data3', userProfile);
            } catch (e) {

            }
        }, [request])
*/


        const funcTion = useCallback(async () => {
           
            const data = await request(`/api/profile/profile/` + userId, 'GET');
            console.log('Data1', data);
            props.setUserProfile(data);
            
            setProfile(data);
            console.log('Data2', userProfile);
            //props.setUserProfile(userProfile);
        }, [userId]);
    
    
        useEffect(async() => {
            if (!auth.ready) {
                return <Loader />
            }
        
            const authUserId = globalStorage.userId;
        
            if (!userId) {
                userId = authUserId;
            }

            funcTion();
    
            //setProfile(funcTion());
            //console.log('Data3', userProfile);
        }, [funcTion])


    const followUser = () => {
        const authToken = globalStorage.token;
        console.log("authToken " + authToken);

        fetch('/api/users/follow',
            {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + authToken
                },
                body: JSON.stringify({
                    followId: userId //id профиля на который мы должны подписаться
                })
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log("data " + JSON.stringify(data));
                //dispatch({type: "UPDATE", payload: {following: data.following, followers: data.followers}})
                //localStorage.setItem('userData', JSON.stringify(data));
                props.updateUserProfile(data);
                setProfile((prevState) => {
                    return {
                        ...prevState,
                        profile: data
                    }
                });
                console.log("userProfile3234 " + userProfile);
            });
    }
    //debugger;
    return (
        <>
            {
                
                <Profile
                    state={props.state}
                    dispatch={props.dispatch}
                    profile={props.profile}
                    followUser={followUser}
                    userProfile={userProfile}
                    userId={userId}
                    isAuth={props.isAuth}
                />
                
               
            }
        </>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, { setUserProfile, updateUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);