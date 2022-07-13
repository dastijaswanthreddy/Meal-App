import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-heading'>
            <img src="./icon.png" alt='#' width= '45px'/>
            <h1>Meals <span>App</span></h1>
        </div>
        <div className='navbar-links'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/categories'><li>Categories</li></Link>
                <Link to='/random'><li>Random</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar