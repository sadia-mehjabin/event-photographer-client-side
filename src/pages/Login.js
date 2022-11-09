import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const provider = new GoogleAuthProvider()
    const {userLogin, googleLogin} = useContext(AuthContext)
    const [message, setMessage] = useState()
    const navigate = useNavigate()

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        
        userLogin(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate('/')
        })
        .catch(error => setMessage(error.message))
    } 

    const handleGoogleLogIn = () => {
        googleLogin(provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero">
            <div>
                <h1 className="text-5xl m-5 font-bold text-center">Login now!</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-300 m-5">
                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">photoURL</span>
                    </label>
                    <input type="url" name='photoURL' placeholder="photoURL" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <p className='text-error'>{message}</p>
                    <p>Don't have an account? <Link className='text-primary' to={'/signup'}>sign up</Link></p>
                    <div className="form-control mt-6 w-full">
                    <input type="submit"  className="btn btn-primary text-white" value="Login" />
                    </div>
                    <button onClick={handleGoogleLogIn} className='btn btn-primary mb-4 p-0'>sign in with google</button>
                </form>
                
                </div>
                
            </div>
        </div>
    );
};

export default Login;