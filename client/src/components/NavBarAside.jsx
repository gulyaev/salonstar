import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarAside = () => {
    return (
        <div class="col s3">
            <div className="collection">
                <div><NavLink to="/links" className="collection-item">Страница ссылок</NavLink></div>
                <div><NavLink to="/create" className="collection-item">Создать ссылку</NavLink></div>
                <div><NavLink to="/profile" className="collection-item">Профиль</NavLink></div>
                <div><NavLink to="/users" className="collection-item">Пользователи</NavLink></div>
                <div><NavLink to="/dialogs" className="collection-item">Сообщения</NavLink></div>
                <div><NavLink to="/courses" className="collection-item">Обучение</NavLink></div>
            </div>
        </div>
    );
}

export default NavBarAside;