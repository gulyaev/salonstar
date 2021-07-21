import React from 'react';
import 'materialize-css';
import { useRoutes } from './routes';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const App = (props) => {
  const routes = useRoutes(true, props);
  return (
    <Router>
      <div className={"container"}>
        {//<!-- Navbar goes here -->
        }
        <nav>
          <div class="nav-wrapper teal lighten-2">
            <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html"><i class="material-icons">search</i></a></li>
              <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
              <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
              <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
            </ul>
          </div>
        </nav>


        {//<!-- Page Layout here -->
        }
        <div class="row">
          <div class="col s3">
            {//<!-- Grey navigation panel -->
            }
            <div className="collection">
              <div><NavLink to="/links" className="collection-item">Страница ссылок</NavLink></div>
              <div><NavLink to="/create" className="collection-item">Создать ссылку</NavLink></div>
              <div><NavLink to="/detail/:id" className="collection-item">Посмотреть ссылки</NavLink></div>
              <div><NavLink to="/profile" className="collection-item">Профиль</NavLink></div>
              <div><NavLink to="/dialogs" className="collection-item">Сообщения</NavLink></div>
              <div><NavLink to="/isauth" className="collection-item">Вход</NavLink></div>
            </div>
          </div>

          <div class="col s9">
            {//<!-- Teal page content  -->

            }
            {routes}
          </div>

        </div>



      </div>
    </Router>
  );
}

export default App;
