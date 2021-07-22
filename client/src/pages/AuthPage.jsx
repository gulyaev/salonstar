import React from 'react';
import {useState} from 'react';

const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className="row">
            <h4>Войдите или зарегистрируйтесь</h4>
            <div className="col s6 m6 l6 offset-s0">
                

                <div className="card teal lighten-2">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="yellow-input" />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="yellow-input" />
                                <label htmlFor="password">Пароль</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn amber accent-4 black-text" style={{ marginRight: 10 }}>Войти</button>
                        <button className="btn  light-blue darken-4">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default AuthPage;