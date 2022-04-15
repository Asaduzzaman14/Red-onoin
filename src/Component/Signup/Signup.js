import React from 'react';
import logo from '../../image/images/logo2.png'
import './Signup.css'


const Signup = () => {
    return (
        <div>
            <form className='form'>
                <img className='login-logo' src={logo} alt="" />
                <br />
                <input type="text" placeholder='Name' />
                <br />
                <input type="email" placeholder='Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="confirm password" placeholder='Confirm Password' />
                <br />
                <input type="submit" value='Submit' />
                <br />
            </form>
        </div>
    );
};

export default Signup;