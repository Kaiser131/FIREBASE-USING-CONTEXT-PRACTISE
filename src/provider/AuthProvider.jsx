import { createContext } from "react";

// creted AuthContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // datas that i will be passed
    const name = { name: 'Kaiser' };
    const nameTwo = { name: 'Lamia' };

    // lets create multiple data
    const authInfo = { name, nameTwo };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;