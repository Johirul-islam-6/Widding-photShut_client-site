import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'



export const AuthContext = createContext();
// const auth = getAuth(app);
const auth = getAuth(app)
//google auth provider
const googleProvider = new GoogleAuthProvider()

const UseContext = ({ children }) => {

    const [user, setUser] = useState(null)
    //loder useState
    const [loding, setLoding] = useState(true);

    //create user 
    const creatUser = (email, pass) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    //Sign in
    const singInPage = (email, pass) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    //Update name
    const upDateUser = (name) => {
        setLoding(true)
        return updateProfile(auth?.currentUser, { displayName: name })
    }
    const singInAutoGoogle = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }
    //forget password
    const forGetPass = (email) => {
        setLoding(true)
        return sendPasswordResetEmail(auth, email)
    }
    //Log out user 
    const userLogOut = () => {
        setLoding(true)
        return signOut(auth)
    }

    const authInfo = { user, loding, singInPage, forGetPass, creatUser, upDateUser, singInAutoGoogle, userLogOut }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            //    setLoding(false)
            setTimeout(() => {
                setLoding(false)
            }, 1000);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>);
};

export default UseContext;