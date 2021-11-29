import React, { useState, useEffect, useContext } from "react";
import { setUserProfile, updateUserProfile, setUserResumeData } from '../../redux/profile-reducer';
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
    const [userProfile, setProfile] = useState();

    const globalStorage = JSON.parse(localStorage.getItem('userData'));//определен айди и токен когда авторизован

    let userId = props.match.params.userId;//определен когда есть id в URI - переход от списка пользователей
    console.log("userIdfromURLProfCont " + userId); //определен когда есть id в URI - переход от списка пользователей

    useEffect(
        async () => {
            if (!auth.ready) {
                return <Loader />
            }

            const authUserId = globalStorage.userId;//определен айди когда авторизован

            if (!userId) {
                userId = authUserId; //если нет id из урла, то берем id из локалсторидж
            }

            try {
                console.log("userIdfromProfCont " + userId); //id из URI либо из Локалсторидж
                const data = await request(`/api/profile/profile/` + userId, 'GET');
                console.log('userProfileData', data);
                props.setUserProfile(data);
                setProfile(data);
                console.log('userProfileDataUseState', userProfile);
            } catch (e) {

            }
        }, [request, userId])

    let getUserResumeData = async () => {
        if (!userId) {
            try {
                console.log("userIdfromProfileContainerResumeData " + userId); //id из URI либо из Локалсторидж
                //получение резюме из БД резюме по авторизованому пользователю
                const resumeData = await request('/api/profile/getprofileinfo', 'GET', null, {
                    Authorization: `Bearer ${token}`
                });
                console.log('ResumeData', resumeData);
                props.setUserResumeData(resumeData);
            } catch (e) {

            }
        } else {
            try {
                console.log("userIdfromProfileContainerResumeDataFromURL " + userId); //id из URL
                //получение резюме из БД резюме по id пользователя из URL
                const resumeData = await request(`/api/profile/getprofileinfo/` + userId, 'GET');
                console.log('ResumeData', resumeData);
                props.setUserResumeData(resumeData);
            } catch (e) {

            }
        }
    };

    let updateUserResumeData = async (profileAbout = props.resume[0].about, profilePersonalInfo = props.resume[0].personalinfo, profileInterests = props.resume[0].interests) => {
        if (!userId) {
            try {
                console.log("userIdfromProfileContainerResumeData " + userId); //id из Локалсторидж
                //получение резюме из БД резюме по авторизованому пользователю
                const resumeData = await request(`/api/profile/updateprofileinfo/` + userId, 'PATCH',
                    {
                        "about": profileAbout,
                        "personalinfo": profilePersonalInfo,
                        "interests": profileInterests
                    },
                    {
                        'Content-Type': 'application/json'
                    });
                console.log('UpdatedResumeData', resumeData);
                props.setUserResumeData(resumeData);
            } catch (e) {

            }
        } else {
            try {
                console.log("userIdfromProfileContainerResumeDataFromURL " + userId); //id из URL
                //получение резюме из БД резюме по id пользователя из URL
                const resumeData = await request(`/api/profile/updateprofileinfo/` + userId, 'PATCH', 
                {
                    "about": profileAbout,
                    "personalinfo": profilePersonalInfo,
                    "interests": profileInterests
                },
                {
                    'Content-Type': 'application/json'
                });
                console.log('UpdatedResumeData', resumeData);
                props.setUserResumeData(resumeData);
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    resume: state.profilePage.resume
});

export default compose(
    connect(mapStateToProps, { setUserProfile, updateUserProfile, setUserResumeData }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);