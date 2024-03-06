import React from 'react';
import { Link } from 'react-router-dom';
import './Navstyle.css';
const Navbar = () => {
  return (
<nav className='navbar'>
  <h1>
      E-Shop 
  </h1>
  <ul>
    <li><a href="/">Merchants</a></li>
    <li><a href="/register">Register</a></li>
    <li><a href="/login">Login</a></li>
  </ul>
</nav>
  );
};

export default Navbar