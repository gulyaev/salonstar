import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavbarTop = (props) => {

    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = (event) => {
        event.preventDefault();
        auth.logout();
        //setAuthUserData(null, null, null)
        history.push('/');
    }

    const currentUser = {
        isAdmin: true
    }

    return (
        <>
            {props.isAdmin
                    ? <div class="card-panel teal lighten-2">Вы авторизованы как администратор. Добро пожаловать, {props.login} </div>
                    : <div class="card-panel teal lighten-2">Вы успешно вошли. Добро пожаловать, {props.login}</div>
            }


            <ul id="dropdown1" class="dropdown-content">
                <li><a href="#!">Управление вакансиями</a></li>
                <li><a href="#!">Опубликовать вакансию</a></li>
                <li class="divider"></li>
                <li><a href="#!">Посмотреть резюме</a></li>
            </ul>
            <ul id="dropdown2" class="dropdown-content">
                <li><a href="#!">Мои резюме</a></li>
                <li><a href="#!">Опубликовать резюме</a></li>
            </ul>
            <nav>
                <div class="row teal lighten-2">
                    <div class="nav-wrapper teal lighten-2" >
                        <a href="#!" class="brand-logo col l2 offset-m2 "><i class="material-icons offset-s2">fingerprint</i>Logo</a>
                        <ul class="right hide-on-med-and-down">
                            <li><NavLink to="/vacancies">Посмотреть вакансии</NavLink></li>
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Ищу сотрудника<i class="material-icons right">arrow_drop_down</i></a></li>
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Ищу работу<i class="material-icons right">arrow_drop_down</i></a></li>
                            {
                                auth.isAuthenticated
                                    ? <li><a href="/" onClick={logoutHandler} className="amber accent-4 waves-effect waves-light btn black-text"> {props.login} Выйти <i class="material-icons right"><span class="material-icons">account_circle</span>keyboard_tab</i></a></li>
                                    : <li><NavLink to={'/login'} className="amber accent-4 waves-effect waves-light btn black-text"> Войти  <i class="material-icons right">keyboard_tab</i></NavLink></li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarTop;
