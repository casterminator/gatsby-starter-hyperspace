import React from 'react';
import { Link } from 'gatsby';
import '../assets/sass/main.scss';
const Header = () => (
  <header id="header">
    <nav>
      <ul>
        <li>
          <Link to="/">Back to Home</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
