import React from 'react';
import logo from '../../image/images/logo2.png'
import './Signup.css'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';




const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });

    const navigate = useNavigate()

    if (user) {
        navigate('/')
        console.log(user);
    }
    if (loading) {
        return <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }


    let customError;
    const submitForm = (e) => {

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.ConfirmPassword.value

        if (password !== confirmPassword) {
            customError = 'password did not match'
            return
        }
        createUserWithEmailAndPassword(email, password)

        console.log('user created');
        console.log(confirmPassword, password);
    }




    return (
        <div>
            <form onSubmit={submitForm} className='form'>
                <img className='login-logo' src={logo} alt="" />
                <br />
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="password" name='password' placeholder='Password' />
                <br />
                <input type="password" name='ConfirmPassword' placeholder='Confirm Password' />
                <br />

                <p className='text-danger'>{error && error?.message} </p>
                <p className='text-danger'>{customError && customError}</p>

                <input className='submit-btn' type="submit" value='Submit' />
                <br />
            </form>
        </div>
    );
};

export default Signup;