import { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/Authentication/firebase/firebase.init';
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    updateProfile,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const register = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {})
                    .catch((error) => {});
                history.push('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            });
    };

    const emailLogin = (email, password, history, location) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const direction = location?.state?.from || '/';
                history.push(direction);
            })
            .catch((error) => {
                setAuthError(error.message);
            });
    };
    const googleLogin = (history, location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('');
                const direction = location?.state?.from || '/';
                history.push(direction);
            })
            .catch((error) => {
                setAuthError(error.message);
            });
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                setAuthError(error.message);
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, []);

    return {
        user,
        register,
        emailLogin,
        googleLogin,
        logOut,
        authError
    };
};

export default useFirebase;
