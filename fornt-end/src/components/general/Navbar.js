import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<nav className='navbar'>
  <h1>
      <i className='navbar-brand'>e-shop</i> 
  </h1>
  <ul>
    <li><a href="">Merchants</a></li>
    <li><a href="">Register</a></li>
    <li><a href="">Login</a></li>
  </ul>
</nav>
  );
};

export default Navbar