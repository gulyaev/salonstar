import React from 'react';

const AuthPage = ({changeHandler, registerHandler, loginHandler, pressHandler, form, loading}, props) => {
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
                                    type="text"
                                    id="login"
                                    name="login"
                                    className="yellow-input"
                                    value={form.login}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="login">Login</label>
                            </div>

                            <div className="input-field">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="yellow-input"
                                    value={form.password}
                                    onChange={changeHandler}
                                    onKeyPress={pressHandler}
                                />
                                <label htmlFor="password">Пароль</label>
                            </div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    id="adminCode"
                                    name="adminCode"
                                    className="yellow-input"
                                    value={form.adminCode}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="adminCode">Код администратора</label>
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