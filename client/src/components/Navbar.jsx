import { useState } from 'react';
import './navbar.css';

const AppNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <header className="nav">
      <h1>Bark Basket</h1>
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Login">Login</a></li>
          <li><a href="#Signup">Signup</a></li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="">Shop</a>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><a href="#Cart">Cart</a></li>
                <li><a href="#Checkout">Checkout</a></li>
                <li><a href="">Products</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppNavbar;
