import React, { useEffect } from 'react';
import 'materialize-css';
import M from 'materialize-css';
import { useRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarTop from './pages/NavbarTop';
import NavBarAside from './pages/NavBarAside';
import * as axios from 'axios';

const App = (props) => {
  const routes = useRoutes(true, props);

  //For workinh of dropdown menu
  useEffect(() => {
    let elems = document.querySelectorAll('.dropdown-trigger');
    //elems.dropdown();
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  });
//debugger;
  return (
    <Router>
      <div className={"container"}>
        <NavbarTop />
        <div class="row">
          <NavBarAside />
          <div class="col s9">
            {routes}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
