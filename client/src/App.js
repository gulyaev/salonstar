import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBarAside from './components/NavBarAside';
import Loader from './components/Loader';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import 'materialize-css';
import M from 'materialize-css';
import NavbarTopContainer from './components/NavbarTopContainer';


const App = (props) => {
  //кидаем на весь проект хук auth.hook.js и достаем оттуда готовые параметры со значениями
  const { token, login, logout, userId, userEmail, userLogin, ready } = useAuth(); //auth.hook.js
  const isAuthenticated = !!token;//превращает значение в boolean - здесь true
  const routes = useRoutes(isAuthenticated, props);

  //For working of dropdown menu
  useEffect(() => {
    let elems = document.querySelectorAll('.dropdown-trigger');
    //elems.dropdown();
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  });
  //debugger;

  //ready - значение из хука useAuth которое устанавливается когда происходит автоматический логин из значений localStorage
  if (!ready) {
    return <Loader />
  }

  return (
    //теперь кидаем на все компоненты контекст с переменными из хука useAuth
    <AuthContext.Provider value={{
      token, login, logout, userId, userEmail, userLogin, ready, isAuthenticated
    }}>
      <Router>
        <div className={"container"}>
          <NavbarTopContainer />
          <div class="row">
            {//isAuthenticated && <NavBarAside />
            }
            {//<div class="col s9 l9">
              }
            
              {routes
              }
              {
                //<useRoutes isAuthenticated={isAuthenticated}/>
              }
            {//</div>
            }
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
