import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Redirect } from 'react-router-dom';
import Loader from "../../components/Loader";

const Profile = (props) => {
  //if (!props.isAuth) return <Redirect to={'/login'} />;

    if (!props.profile) {
        return <Loader />
    }

    return (
        <>

            <ProfileInfo profile={props.profile} />
            <MyPostsContainer state={props.state} dispatch={props.dispatch} />
        </>
    )
}

export default Profile;
