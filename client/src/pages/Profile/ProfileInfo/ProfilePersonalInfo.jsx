import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    aboutMe: {
        margin: '18px 0px',
        borderBottom: "1px solid grey",
        fontWeight: '500',
        fontSize: '25px'
    }
}));

const ProfilePersonalInfo = (props) => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }

    return (
        <>
            <div className={classes.aboutMe}>ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ</div>
            {editMode &&
                <div>
                    <span class="tiny right material-icons">edit</span>
                    <input autoFocus={true} onBlur={ deactivateEditMode } value={props.personalInfo} />
                </div>
            }
            {!editMode &&
                <span onClick={ activateEditMode } >{props.personalInfo}</span>
            }
        </>
    )
}

export default ProfilePersonalInfo;