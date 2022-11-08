import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)
console.log(auth)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, validUser => {
            console.log(validUser)
            setUser(validUser)
        })
        return () => {
            return unsubscribe();
        }
    }, [] )

    const authInfo = {createUser, user, load, userLogin, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;