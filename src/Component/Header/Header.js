import React from 'react';
import logo from '../../image/images/logo2.png'
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth)


    const handelLogOut = () => {
        signOut(auth)

    }

    return (
        <>
            <div className='nav'>
                <Link to={'/'}><img className='logo' src={logo} alt="" /></Link>


                <div className='nav-item'>
                    <Link to={'/cart'}> <FiShoppingCart className='cart'></FiShoppingCart></Link>
                    <Link className='mx-3 text-danger' to='/login'>Login</Link>
                    {
                        user ? <button onClick={handelLogOut}>Log Out</button> :
                            <Link className='signup' to='/signup'>Sign up</Link>
                    }
                </div>


            </div>
        </>
    );
};

export default Header;