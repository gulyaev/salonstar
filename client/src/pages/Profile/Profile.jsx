import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <>
            
            <ProfileInfo />
            <MyPosts state={props.state} addPost={props.addPost} newPostText={props.newPostText} onPostChange={props.onPostChange}/>
        </>
    )
}

export default Profile;
