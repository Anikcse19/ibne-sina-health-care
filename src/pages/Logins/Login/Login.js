import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hook/useAuth';


const Login = () => {

    const { user, signInUsingGoogle, handleRegister, handleEmailChange, handlePasswordChange, error, toggle, isLogin, handleResetPassword, } = useAuth();


    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }



    return (
        <div className="container w-50 mx-auto shadow-lg bg-info my-5">
            <h2 className="text-white">Please Login</h2>
            <h4>{user.email}</h4>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* {!isLogin && "Registration"} */}



                    <Form.Control onBlur={handleEmailChange} type="email" className="w-50 m-auto" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control onBlur={handlePasswordChange} type="password" className="w-50 m-auto" placeholder="Password" />
                </Form.Group>

                {/* <Form.Group onChange={toggle} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="text-danger" type="checkbox" label={isLogin ? "Please Register" : "Already Registered ?"} />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br /><br />
                {/* <Button onClick={handleResetPassword} variant="primary" type="submit">
                    Reset password
                </Button> */}
            </Form>

            <p className="text-danger">{error}</p>
            <p>or</p>
            <Button className="mb-3" onClick={handleGoogleSignIn} variant="primary"><i className="fab fa-google text-warning"></i> Google Sign In</Button>
        </div >
    );
};

export default Login;