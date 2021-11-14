import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebaseInit from './authInitializar';

//firebase initialize
firebaseInit()
const auth = getAuth();
const UseFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    // login with google 
    const loginWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)

            }).catch((error) => {

            }).finally(() => setIsLoading(false))
    }
    // create user account 
    const createUser = (email, password, displayName) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                updateUser(displayName)
            })
            .catch((error) => {
            }).finally(() => setIsLoading(false))
    }
    // login with email and password 
    const loginUser = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    // observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [])
    // logout user 
    const logoutUser = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false))
    }
    // update user name 
    const updateUser = (displayName) => {
        updateProfile(auth.currentUser, {
            displayName
        })
            .then(() => {
            })
            .catch((error) => {
            });
    }

    return {
        user,
        setUser,
        createUser,
        loginUser,
        loginWithGoogle,
        logoutUser,
        isLoading,
        setIsLoading
    };
};

export default UseFirebase;