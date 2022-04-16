import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/images/logo2.png'
import './Login.css'


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handelEmailChange = (e) => {
        const email = e.target.value
        setEmail(email)
    }
    const handlPasswordChange = e => {
        const password = e.target.value
        setPassword(password)
    }


    const handelFromSubmit = (e) => {
        e.preventDefault()


        signInWithEmailAndPassword(email, password)
    }



    return (
        <div>
            <form onSubmit={handelFromSubmit} className='form'>

                <img className='login-logo' src={logo} alt="" />
                <br />
                <input onChange={handelEmailChange} type="email" name='email' placeholder='Email' />
                <br />
                <input onChange={handlPasswordChange} type="password" name='password' placeholder='Password' />
                <br />
                {loading && <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>}
                <p className='text-danger'>{error ? error.message : ''}</p>
                <input className='submit-btn' type="submit" value='Login' />
                <br />
                <Link to={'/signup'}>Create An Account</Link>

            </form>
        </div>
    );
};

export default Login;