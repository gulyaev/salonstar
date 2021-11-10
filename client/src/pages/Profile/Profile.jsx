import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Redirect } from 'react-router-dom';
import Loader from "../../components/Loader";

const Profile = (props) => {


    if (!props.profile) {
        return <Loader />
    }
    //alert(props.isAuth);
    //debugger;
    //if (props.isAuth === false) return <Redirect to={'/login'} />;
    
    return (
        <>

            <ProfileInfo profile={props.profile} followUser={props.followUser}
                userProfile={props.userProfile}
                userId={props.userId}
            />
            <MyPostsContainer state={props.state} dispatch={props.dispatch} />
        </>
    )
}

export default Profile;
