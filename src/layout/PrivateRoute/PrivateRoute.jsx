import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    // loading
    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>;
    }

    // setting up for redirect
    if (user) {
        return children;
    }

    return (
        // using Navigate button to redirect meanwhile when i have redirect the login or register i used UseNavigate() hook
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;