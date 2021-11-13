import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebaseInit from './authInitializar';

//firebase initialize
firebaseInit()
const auth = getAuth();
const UseFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
           
            }).catch((error) => {
           
            }).finally(() => setIsLoading(false))
    }

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

    const loginUser = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
            }
        });
        return () => unsubscribe
    }, [])

    const logoutUser = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false))
    }
    const updateUser = (displayName) => {
        updateProfile(auth.currentUser, {
            displayName
        }).then(() => {
        }).catch((error) => {
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