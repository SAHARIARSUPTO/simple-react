import React from 'react';
import './Header.css';
import logo from '../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <div>
            <img src={logo} alt=""/></div>
            <nav>
            <button className='button'><a href='/Home'>Home</a></button>
            <button className='button'><a href='/Order'>Order</a></button>
            <button className='button'><a href='/Review'>Order Review</a></button>
            <button className='button'><a href='/Inventory'>Manage Inventory</a></button>
            <button className='button'><a href='/Login'>Log In</a></button>
        
            </nav>
        </div>
    );
};

export default Header;