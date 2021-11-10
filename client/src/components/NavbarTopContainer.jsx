import React, { useEffect } from 'react';
import NavbarTop from './NavbarTop';
import { setAuthUserData } from '../redux/auth-reducer';
import { connect } from "react-redux";
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { Redirect } from 'react-router-dom';

function NavbarTopContainer(props) {
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();
    
    useEffect(async () => {
        console.log('Загрузился Топ');

        const userDataStorage = localStorage.getItem('userData');

        console.log("userDataStorage from top " + userDataStorage);

        if( !userDataStorage ) return <Redirect to={'/login'}/>;

        const userDataStorageParsed = JSON.parse(localStorage.getItem('userData'));//определен айди 
        const userId = userDataStorageParsed.userId;//достаем айдишник
        console.log("userId from top " + userId);

            try {
                const data = await request('/api/auth/me', 'POST', {userId});
                message(data.message);
                props.setAuthUserData(data.userId, data.userEmail, data.userLogin, data.isAdmin, data.isAuth);
            } catch (e) {
                
            }     
    }, [localStorage])

    return (
        <>
            <NavbarTop {...props} />
        </>

    );
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAdmin: state.auth.isAdmin
    }
}

export default connect(mapStateToProps, { setAuthUserData })(NavbarTopContainer);
