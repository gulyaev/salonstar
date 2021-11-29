import React from 'react';
import ImageAvatars from '../Avatar/ImageAvatars';
import Loader from "../../../components/Loader";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import ResumeContainer from '../../../components/ResumeContainer';

const useStyles = makeStyles((theme) => ({
    imageLogin: {
        display: 'flex',
        flexWrap: 'wrap',
        //justifyContent: 'space-between',
        margin: '18px 0px',
    },
    aboutMe: {
        margin: '18px 0px',
        borderBottom: "1px solid grey",
        fontWeight: '500',
        fontSize: '25px'
    },
    nameLogin: {
        margin: '0px 0px',
        fontWeight: '500',
        fontSize: '25px'
    },
    postsFollowers: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '108%'
    },
    image: {
        marginRight: '50px',
    },
    postsFollowers: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '45%',
        marginBottom: '25px'
    },
    butTon: {
        margin: '18px 0px'
    },
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        //width: '108%'
    },
    item: {
        width: '30%',
    },
}));

const ProfileInfo = (props) => {
    const classes = useStyles();

    //debugger;
    if (!props.profile) {
        return <Loader />
    }


    //debugger;
    return (
        <>
            <div class="col s12 m8 offset-m2 l12 ">
                <div className={classes.imageName} class="card-panel grey lighten-5 z-depth-1">
                    <div className={classes.image}>
                        <img style={{ width: "160px", height: "160px" }}
                            src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <div className={classes.nameLogin}>{props.profile.login}</div>
                        <div>
                            <div className={classes.postsFollowers}>
                                <h6>40 posts</h6>
                                <h6>{props.profile.followers.length} followers</h6>
                                <h6>{props.profile.following.length} following</h6>
                            </div>
                        </div>
                        <div className={classes.butTon}>
                            <button class="btn-small waves-effect waves-light" type="submit" name="action" onClick={props.followUser}>Подписаться
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                        <div>
                            <button class="btn-small waves-effect waves-light" type="submit" name="action" onClick={props.getUserResumeData}>Показать резюме
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                        <ResumeContainer resume={props.resume} updateUserResumeData={props.updateUserResumeData} getUserResumeData={props.getUserResumeData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;