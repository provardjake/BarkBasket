import { useState } from 'react';
import './navbar.css';
import {Link} from "react-router-dom";
import Auth from "../utils/auth";

const AppNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const logout = (event) =>{
    event.preventDefault();
    Auth.logout();
  }

  return (
    <header className="nav">
      <h1>Bark Basket</h1>
      <nav>
        <ul>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/">Shop</a>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            )}
          </li>
          {Auth.loggedIn() ? (
            <>
            <li>Hello, {Auth.getProfile().data.username}</li>
            <li><button onClick={logout}>Logout</button></li>
            </>
          ): (
            <>
            <li><Link to="/login">Login</Link></li>
            </>
          )}
          
          <li><Link to="/contact-us">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default AppNavbar;
