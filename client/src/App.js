import React from 'react';
import 'materialize-css';
import { useRoutes } from './routes';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const App = (props) => {
  const routes = useRoutes(true, props);
  return (
    <Router>
      <div className={"container"}>
        <div>
          <div>
            <NavLink to="/links">Страница ссылок</NavLink>
          </div>
          <div><NavLink to="/create">Создать ссылку</NavLink></div>
          <div><NavLink to="/detail/:id">Посмотреть ссылки</NavLink></div>
          <div><NavLink to="/profile">Профиль</NavLink></div>
          <div><NavLink to="/dialogs">Сообщения</NavLink></div>
          <div><NavLink to="/isauth">Вход</NavLink></div>
        </div>
        {routes}
      </div>
    </Router>
  );
}

export default App;
