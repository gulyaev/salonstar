import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
    aboutMe: {
        margin: '18px 0px',
        borderBottom: "1px solid grey",
        fontWeight: '500',
        fontSize: '25px'
    }
}));

const Resume = (props) => {
    const classes = useStyles();
    const [editMode1, setEditMode1] = useState(false);
    const [editMode2, setEditMode2] = useState(false);
    const [editMode3, setEditMode3] = useState(false);
    const [profileAbout, setProfileAbout] = useState(props.aboutMe);
    const [profilePersonalInfo, setProfilePersonalInfo] = useState(props.personalInfo);
    const [profileInterests, setProfileInterests] = useState(props.interests); 

    useEffect (() => {
        setProfileAbout(props.aboutMe);
        setProfilePersonalInfo(props.personalInfo);
        setProfileInterests(props.interests);
    }, [props.aboutMe, props.personalInfo, props.interests])

    const activateEditMode1 = () => {
        setEditMode1(true);
    }

    const deactivateEditMode1 = () => {
        setEditMode1(false);
        props.updateUserResumeData(profileAbout, profilePersonalInfo, profileInterests);
        props.getUserResumeData();
    }

    const activateEditMode2 = () => {
        setEditMode2(true);
    }

    const deactivateEditMode2 = () => {
        setEditMode2(false);
        props.updateUserResumeData(profileAbout, profilePersonalInfo, profileInterests);
        props.getUserResumeData();
    }

    const activateEditMode3 = () => {
        setEditMode3(true);
    }

    const deactivateEditMode3 = () => {
        setEditMode3(false);
        props.updateUserResumeData(profileAbout, profilePersonalInfo, profileInterests);
        props.getUserResumeData();
    }
    //debugger;
    return (
        <>
            {
                props.resume &&
                props.resume.map((resumeItem, index) => {
                    return (
                        <>
                            <div key={resumeItem._id}>
                                <div className={classes.aboutMe}>ОБО МНЕ</div>
                                {editMode1 &&
                                    <div>
                                        <span class="tiny right material-icons">edit</span>
                                        <input autoFocus={true} onBlur={ deactivateEditMode1 } value={profileAbout} onChange={(e) => { setProfileAbout(e.target.value) }} />
                                    </div>
                                }
                                {!editMode1 &&
                                    <span onClick={ activateEditMode1 }>{resumeItem.about}</span>
                                }

                                <div className={classes.aboutMe}>ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯЯ</div>
                                {editMode2 &&
                                    <div>
                                        <span class="tiny right material-icons">edit</span>
                                        <input autoFocus={true} onBlur={ deactivateEditMode2 } value={profilePersonalInfo} onChange={(e) => { setProfilePersonalInfo(e.target.value) }} />
                                    </div>
                                }
                                {!editMode2 &&
                                    <span onClick={ activateEditMode2 }>{resumeItem.personalinfo}</span>
                                }


                                <div className={classes.aboutMe}>ИНТЕРЕСЫ</div>
                                {editMode3 &&
                                    <div>
                                        <span class="tiny right material-icons">edit</span>
                                        <input autoFocus={true} onBlur={ deactivateEditMode3 } value={profileInterests} onChange={(e) => { setProfileInterests(e.target.value) }} />
                                    </div>
                                }
                                {!editMode3 &&
                                    <span onClick={ activateEditMode3 }>{resumeItem.interests}</span>
                                }
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Resume;
