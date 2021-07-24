import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRoutes } from '../routes';

const NavbarTop = () => {
    return (
        <>
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
                            <li><NavLink to="/isauth" className="amber accent-4 waves-effect waves-light btn black-text"> Войти  <i class="material-icons right">keyboard_tab</i></NavLink></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarTop;
