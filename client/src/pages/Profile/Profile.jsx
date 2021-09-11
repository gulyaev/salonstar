import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../../components/Loader";

const Profile = (props) => {
    return (
        <>

            <ProfileInfo profile={props.profile} />
            <MyPostsContainer state={props.state} dispatch={props.dispatch} />
        </>
    )
}

export default Profile;
