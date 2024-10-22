import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebaser/firebase.config";

// creted AuthContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // datas that i will be passed


    const [user, setUser] = useState(null);


    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signin user

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };



    // context data
    const authInfo = { user, createUser, login };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;