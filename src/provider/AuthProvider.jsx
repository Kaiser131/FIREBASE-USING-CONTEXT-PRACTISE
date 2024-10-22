import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebaser/firebase.config";

// creted AuthContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // loading state
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // signin user
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    // signOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // osStateChange observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('right now observing', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);


    // context data
    const authInfo = { user, createUser, loading, login, logOut };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;