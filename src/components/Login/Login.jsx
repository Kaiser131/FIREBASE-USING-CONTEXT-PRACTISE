import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const { name } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

    };


    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="hero-content flex-col ">

                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now! {name.name}</h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <input className="btn btn-outline" type="submit" value="Login" />
                    </form>

                </div>


            </div>

        </div>
    );
};

export default Login;