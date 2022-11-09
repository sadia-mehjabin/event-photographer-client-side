import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, load} = useContext(AuthContext)
    const location = useLocation();
    if(load){
        return <h2>loading...</h2>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;