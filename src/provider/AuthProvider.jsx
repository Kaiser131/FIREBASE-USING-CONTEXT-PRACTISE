import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebaser/firebase.config";

// creted AuthContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // datas that i will be passed


    const [user, setUser] = useState(null);

    // osStateChange observer

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, userLocation => {
            setUser(userLocation);
            console.log('right now observing', userLocation);
        });
        return () => {
            unSubscribe();
        };
    }, []);


    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signin user

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // signOut

    const logOut = () => {
        return signOut(auth);
    };

    // context data
    const authInfo = { user, createUser, login, logOut };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;