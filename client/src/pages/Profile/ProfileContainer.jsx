import React, { useState, useEffect, useContext } from "react";
import { setUserProfile, 
        updateUserProfile, 
        setUserResumeData, 
        getAndSetUserProfileThunkCreator,
        getAuthorizedUserResumeThunkCreator, 
        getUserResumeURLThunkCreator,
        updateUserResumeDataThunkCreator
    } from '../../redux/profile-reducer';
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
    const { token } = useContext(AuthContext);
    const auth = useContext(AuthContext);
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();
    const [userProfile, setProfile] = useState(props.profile);

    const globalStorage = JSON.parse(localStorage.getItem('userData'));//определен айди и токен когда авторизован

    let userId = props.match.params.userId;//определен когда есть id в URI - переход от списка пользователей
    console.log("userIdfromURLProfCont " + userId); //определен когда есть id в URI - переход от списка пользователей

    const authUserId = globalStorage.userId;//определен айди когда авторизован

    if (!userId) {
        userId = authUserId; //если нет id из урла, то берем id из локалсторидж
        console.log("userIdFromLS " + userId);
    }

    useEffect(
        async () => {
            if (!auth.ready) {
                return <Loader />
            }

            try {
                props.getAndSetUserProfileThunkCreator(userId);
            } catch (e) {

            }
        }, [request, userId])

    let getUserResumeData = async () => {
        if (userId === authUserId) {
            try {
                console.log("userIdfromProfileContainerResumeDataLS " + userId); //id из Локалсторидж
                //получениеиз БД резюме по авторизованому пользователю
                props.getAuthorizedUserResumeThunkCreator(token);
            } catch (e) {

            }
        } else {
            try {
                console.log("userIdfromProfileContainerResumeDataFromURL " + userId); //id из URL
                //получение резюме из БД резюме по id пользователя из URL
                props.getUserResumeURLThunkCreator(userId);
            } catch (e) {

            }
        }
    };

    //let updateUserResumeData = async (userId, props.resume[0].about, props.resume[0].personalinfo, props.resume[0].interests) => {
    let updateUserResumeData = async (profileAbout, profilePersonalInfo, profileInterests) => {
        if (userId === authUserId) {
            try {
                console.log("userIdfromProfileContainerResumeData " + userId); //id из Локалсторидж
                //получение резюме из БД резюме по авторизованому пользователю
                props.updateUserResumeDataThunkCreator(userId, profileAbout, profilePersonalInfo, profileInterests)
            } catch (e) {

            }
        } else {
            try {
                console.log("userIdfromProfileContainerResumeDataFromURL " + userId); //id из URL
                //получение резюме из БД резюме по id пользователя из URL
                props.updateUserResumeDataThunkCreator(userId, profileAbout, profilePersonalInfo, profileInterests)
            } catch (e) {

            }
        }
    };

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

    console.log("Render Profile");
    return (
        <>
            {

                <Profile
                    state={props.state}
                    dispatch={props.dispatch}
                    profile={props.profile}
                    getUserResumeData={getUserResumeData}
                    updateUserResumeData={updateUserResumeData}
                    followUser={followUser}
                    userProfile={userProfile}
                    isAuth={props.isAuth}
                    resume={props.resume}
                    loading={props.loading}
                />
            }
        </>
    )
}

let mapStateToProps = (state) => {
    console.log("mstp PROFILE");
    return {
        profile: state.profilePage.profile,
        resume: state.profilePage.resume
    }
};

export default compose(
    connect(mapStateToProps, 
        { 
            setUserProfile, 
            updateUserProfile, 
            setUserResumeData, 
            getAndSetUserProfileThunkCreator, 
            getAuthorizedUserResumeThunkCreator,
            getUserResumeURLThunkCreator,
            updateUserResumeDataThunkCreator
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);