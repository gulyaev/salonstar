import React, { useContext } from 'react';
import {
    setAuthUserData,
    setAuthUserDataThunkCreator,
    setAuthUserDataLoginThunkCreator
} from '../redux/auth-reducer';
import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';
import AuthPage from "./AuthPage";

function AuthPageContainer(props) {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();
    const [form, setForm] = useState({
        email: '',
        login: '',
        password: '',
        adminCode: ''
    });

    useEffect(() => {
        console.log('Error', error);
        message(error);
        clearError();
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            props.setAuthUserDataThunkCreator(request, { ...form }, message, auth);
            //setAuthUserData(data.userId, data.userEmail, data.userLogin, data.currentUser, data.isAuth);
        } catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            props.setAuthUserDataLoginThunkCreator(request, { ...form }, message, auth);
            //setAuthUserData(data.userId, data.email, data.login)
        } catch (e) {

        }
    }

    const pressHandler = async (event) => {
        if (event.key === 'Enter') {
            try {
                props.setAuthUserDataLoginThunkCreator(request, { ...form }, message, auth);
            } catch (e) {

            }
        }
    }

    return (
        <AuthPage changeHandler={changeHandler} registerHandler={registerHandler} loginHandler={loginHandler} pressHandler={pressHandler}
            form={form} loading={loading}
        />
    );
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { setAuthUserData, setAuthUserDataThunkCreator, setAuthUserDataLoginThunkCreator })(AuthPageContainer);