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
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/">Shop</a>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><a href="/cart">Cart</a></li>
                <li><a href="/checkout">Checkout</a></li>
              </ul>
            )}
          </li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="/contact-us">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default AppNavbar;
