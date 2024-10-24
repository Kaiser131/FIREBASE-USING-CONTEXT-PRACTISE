import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <div className="flex gap-4">
            <li><NavLink to='/'>Home</NavLink></li>
            {!user && <div className="flex gap-4">
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
            </div>}
            {
                user && <li><NavLink to='/order'>Order</NavLink></li>
            }
        </div>

    </>;

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('log out succesful');
            })
            .catch(error => {
                console.log(error.message);
            });
    };


    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {navLinks}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navLinks}

                    </ul>
                </div>

                <div className="navbar-end gap-4">
                    {user ? <div className="flex items-center gap-4">
                        <p>{user.email}</p>
                        <button onClick={handleLogOut} className="btn btn-outline">Sign out</button>
                    </div> : <NavLink to='/login' className="btn btn-outline">Login</NavLink>}
                </div>



            </div>

        </div>
    );
};

export default NavBar;