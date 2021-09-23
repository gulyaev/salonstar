import React, { useEffect } from 'react';
import NavbarTop from './NavbarTop';
import { setAuthUserData } from '../redux/auth-reducer';
import { connect } from "react-redux";
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

function NavbarTopContainer(props) {
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();
    
    useEffect(async () => {
        console.log('Загрузился Топ');
        const userDataStorage = JSON.parse(localStorage.getItem('userData'));//определен айди и токен
        const userId = userDataStorage.userId;//достаем айдишник
        
        try {
            const data = await request('/api/auth/me', 'POST', {userId});
            message(data.message);
            props.setAuthUserData(data.userId, data.userEmail, data.userLogin, data.isAdmin);
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
