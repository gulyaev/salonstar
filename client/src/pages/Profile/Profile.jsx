import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts state={props.state}/>
        </>
    )
}

export default Profile;
