import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogIn = event => {
        event.preventDefault();
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
                    <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <p>Don't have an account? <Link className='text-primary' to={'/signup'}>sign up</Link></p>
                    <div className="form-control mt-6">
                    <input type="submit"  className="btn btn-primary text-white" value="Login" />
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;