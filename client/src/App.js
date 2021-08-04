import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarTop from './pages/NavbarTop';
import NavBarAside from './pages/NavBarAside';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import 'materialize-css';
import M from 'materialize-css';


const App = (props) => {
  const { token, login, logout, userId } = useAuth(); //auth.hook.js
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated, props);

  //For workinh of dropdown menu
  useEffect(() => {
    let elems = document.querySelectorAll('.dropdown-trigger');
    //elems.dropdown();
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  });
  //debugger;

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        <div className={"container"}>
          <NavbarTop />
          <div class="row">
            {isAuthenticated && <NavBarAside />}
            <div class="col s9">
              {routes}
            </div>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
