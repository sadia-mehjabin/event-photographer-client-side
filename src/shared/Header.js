import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
      logOut()
      .then(() => {

      })
      .catch(err => console.log(err))
    }

    return (
        <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-accent rounded-box w-52">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Blog'}>Blog</Link></li>
            </ul>
          </div>
          <h2 className="btn btn-ghost normal-case text-xl">Event Photographer Sayem</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Blog'}>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
        
        {
          user? 
          <>
          <li className="btn mx-2"><Link to={'/myReview'}>My reviews</Link></li>
          <li className="btn mx-2"><Link to={'/addService'}>Add service</Link></li>
          <h2>{user.displayName}</h2>
          <li onClick={handleLogOut} className="btn mx-2">Log out</li>
          </>
          : <li className="btn"><Link to={'/login'}>Log in</Link></li>
        }
        </div>
      </div>
    );
};

export default Header;