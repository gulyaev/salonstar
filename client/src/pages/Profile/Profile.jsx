import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <>
            
            <ProfileInfo />
            <MyPostsContainer state={props.state} dispatch={props.dispatch} postsData={props.state.profilePage.postsData}/>
        </>
    )
}

export default Profile;
