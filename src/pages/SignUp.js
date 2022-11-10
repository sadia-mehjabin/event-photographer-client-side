import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useTitle from '../hooks/UseTitle';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const [message, setMessage] = useState()
    useTitle('Sign up')
    const navigate = useNavigate()

    const handleSignUpSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            user.photoURL = photoURL;
            user.name = name;
            console.log(user)
            navigate('/')
        })
        .catch(error => setMessage(error.message))
    } 

    return (
        <div className="hero">
            <div >
                <h1 className="text-5xl m-5 font-bold text-center">Sign up now!</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-300 m-5">
                <form onSubmit={handleSignUpSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">photoURL</span>
                    </label>
                    <input type="url" name='photoURL' placeholder="photoURL" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <p className='text-error'>{message}</p>
                    <p>already have an account? <Link className='text-primary' to={'/login'}>Log in</Link></p>
                    <div className="form-control mt-6">
                    <input type="submit"  className="btn btn-error" value="Sign up" />
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;