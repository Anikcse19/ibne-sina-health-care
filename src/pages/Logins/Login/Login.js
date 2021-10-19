import React from 'react';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className="container ">
            <div className='card shadow-lg my-5 text-center w-75 mx-auto login-form'>
                <h2 className='text-success fw-bold mt-3'>Please Login!!</h2>
                <form>
                    <label for="validationDefault05" class="form-label text-start me-5">Email:</label>
                    <input className='my-1' type="email" name="" id="" placeholder="Your Email" required />
                    <br />

                    <label for="validationDefault05" class="form-label text-start">Password:</label>
                    <input className='my-1 ms-3' type="password" name="" id="" placeholder='Password' required />
                    <br />

                    <input className="btn btn-success my-3" type="submit" value="SIGN IN" />
                </form>

                <p>New to <span className='fw-bold text-danger'>IBNE SINA? </span></p>
                <Link to="/register"> <button className='btn btn-primary ms-1'>Registration Now</button></Link>

                <div>----------or----------</div>
                <button
                    className="btn btn-warning my-3 w-50 mx-auto"
                    onClick={handleGoogleLogin}
                ><i class="m-2 text-danger fab fa-google"></i>Google Sign In
                </button>
            </div>
        </div>
    );
};

export default Login;