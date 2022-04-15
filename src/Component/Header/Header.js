import React from 'react';
import logo from '../../image/images/logo2.png'
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className='nav'>
            <img className='logo' src={logo} alt="" />
            <div className='nav-item'>
                <FiShoppingCart className='cart'></FiShoppingCart>
                <Link className='mx-3 text-danger' to='/login'>Login</Link>
                <Link className='signup' to='/signup'>Sign up</Link>
            </div>
        </div>
    );
};

export default Header;