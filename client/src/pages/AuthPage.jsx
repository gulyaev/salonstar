import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import { useHttp } from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    useEffect(()=>{
        console.log('Error', error);
        message(error);
        clearError();
    }, [error, message, clearError])

    useEffect(()=>{
        window.M.updateTextFields();
    }, [])

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            console.log('Data', data);
            message(data.message);
        } catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            console.log('Data', data);
            message(data.message);
            auth.login(data.token, data.userId)
        } catch (e) {

        }
    }

    return (
        <div className="row">
            <h4 class="card-panel">Войдите или зарегистрируйтесь</h4>
            <div className="col s6 m6 l6 offset-l2">
                

                <div className="card teal lighten-2">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="yellow-input" 
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="yellow-input" 
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Пароль</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button onClick={loginHandler} className="btn amber accent-4 black-text" style={{ marginRight: 10 }} disabled={loading}>Войти</button>
                        <button onClick={registerHandler} className="btn  light-blue darken-4" disabled={loading}>Регистрация</button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default AuthPage;