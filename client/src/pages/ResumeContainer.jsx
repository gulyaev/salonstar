import React, { useContext } from 'react';
import {
    postResumeThunkCreator
} from '../redux/profile-reducer';
import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import Resume from "./Resume";

function ResumeContainer(props) {
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();
    const [resumeForm, setResumeForm] = useState({
        sex: '',
        city: '',
        about: '',
        personalinfo: '',
        interests: ''
    });

    const globalStorage = JSON.parse(localStorage.getItem('userData'));//определен айди и токен когда авторизован

    useEffect(() => {
        console.log('Error', error);
        message(error);
        clearError();
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    const changeHandler = (event) => {
        setResumeForm({ ...resumeForm, [event.target.name]: event.target.value })
    }

    const postResumeHandler = async () => {
        const authToken = globalStorage.token;
        try {
            props.postResumeThunkCreator(request, { ...resumeForm }, authToken, message);
        } catch (e) {

        }
    }

    return (
        <Resume
            changeHandler={changeHandler}
            postResumeHandler={postResumeHandler}
            resumeForm={resumeForm}
            loading={loading}
        />
    );
}

export default connect(null, { postResumeThunkCreator })(ResumeContainer);