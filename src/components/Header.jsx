import React from 'react';
import './Header.css';
import logo from '../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <div>
            <img src={logo} alt=""/></div>
            <nav>
            <button className='button'><a href=''>Order</a></button>
            <button className='button'><a href=''>Order Review</a></button>
            <button className='button'><a href=''>Manage Inventory</a></button>
            <button className='button'><a href='/login.html'>Log In</a></button>
            </nav>
        </div>
    );
};

export default Header;