import React from 'react';
import logo from '../../image/images/logo2.png'
import './Signup.css'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';




const Signup = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });

    //  send email verivication
    const [sendEmailVerification, sending, verifyingError] = useSendEmailVerification(auth);

    //   update profile
    const [updateProfile, updating, UPdateError] = useUpdateProfile(auth);


    const navigate = useNavigate()

    if (user) {
        console.log(user);
        navigate('/cart')
    }
    if (loading) {
        return <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }


    let customError;

    const submitForm = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.ConfirmPassword.value

        if (password !== confirmPassword) {
            customError = 'password did not match'
            return
        }
        await updateProfile({ displayName: name })
        // sendEmailVerification(email)
        await createUserWithEmailAndPassword(email, password)

        console.log('user created');

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
                <Link to={'/login'}>Already have an Account</Link>
            </form>
        </div>
    );
};

export default Signup;