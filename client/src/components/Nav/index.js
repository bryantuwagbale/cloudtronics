import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="right hide-on-med-and-down">
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/signup">
              Signup
            </Link>
            
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <div className="nav-wrapper">
      <nav className="black">
      
        <Link to="/">
          Cloudtronics
        </Link>
        {showNavigation()}
        
      </nav>
      </div>
    </header>
  );
}

export default Nav;
