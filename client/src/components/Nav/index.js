import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul class="right hide-on-med-and-down">
          
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul class="right hide-on-med-and-down">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (

    <nav>
    <div class="nav-wrapper white black-text">
      <a href="/" class="brand-logo center  black-text"><i class="material-icons">cloud</i>Cloudtronics</a>
      <div>{showNavigation()}</div>
    </div>
  </nav>
    
  );
}

export default Nav;
