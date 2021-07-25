import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/store';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
        //newPostElement.current.value='';
    }

    let onPostChange = (text) => {
        props.dispatch(onPostChangeActionCreator(text));
    }


    return (
        <MyPosts state={props.state} onPostChange={onPostChange} addPost={addPost} postsData={props.state.profilePage.postsData}
        newPostText={props.state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;