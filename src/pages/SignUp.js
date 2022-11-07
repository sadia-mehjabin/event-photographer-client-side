import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero">
            <div >
                <h1 className="text-5xl m-5 font-bold text-center">Sign up now!</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-300 m-5">
                <form className="card-body">
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