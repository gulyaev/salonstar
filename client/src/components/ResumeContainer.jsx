import React from "react";
import { connect } from "react-redux";
import Resume from "./Resume"

const ResumeContainer = (props) => {
    //debugger;
    return (
        <Resume resume={props.resume} updateUserResumeData={props.updateUserResumeData} getUserResumeData={props.getUserResumeData}
        />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    resume: state.profilePage.resume
});

export default connect(mapStateToProps, {})(ResumeContainer);
