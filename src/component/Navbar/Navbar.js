import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Navbar.css'

const Navbar = () => {
    const activeTab = {
        fontWeight: 'bold',
        color: 'red',
        borderRadius: '5px',
    }

    const { user, logOut } = useAuth();
    console.log(user);

    return (
        <nav class="navbar navbar-expand-lg navbar-dark nav-bg my-nav">
            <div class="container-fluid">
                <NavLink class="navbar-brand fw-bold" to="/" style={{ fontFamily: "Yellowtail" }}>IBNE SINA</NavLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse text-center" id="navbarTogglerDemo02" style={{ fontStyle: 'Ubuntu' }}>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className='text-black fw-bold text-decoration-none nav-link' activeStyle={activeTab} to='/home' >HOME</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className='text-black fw-bold text-decoration-none nav-link' activeStyle={activeTab} to='/treatment'>TREATMENT</NavLink>
                        </li>


                        <li class="nav-item">
                            <NavLink className='text-black fw-bold text-decoration-none nav-link' activeStyle={activeTab} to='/medicalServices'>MEDICAL SERVICE</NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink className='text-black fw-bold text-decoration-none nav-link' activeStyle={activeTab} to='/contact'>CONTACT US</NavLink>
                        </li>
                    </ul>

                    {
                        user.email &&
                        <span style={{ color: 'white', padding: "5px", backgroundColor: 'black', marginRight: '10px' }}>Hello {user.displayName} </span>
                    }

                    {
                        user?.email ?
                            <button onClick={logOut} style={{ fontStyle: 'Ubuntu' }} className='btn btn-outline-success text-black me-3'><img className='img-fluid rounded-circle' style={{ height: '35px' }} src={user.photoURL} alt="" /> Log Out</button> :
                            <div>
                                <Link to='/login'>
                                    <button className='btn btn-primary me-3'><i class="fas fa-sign-in-alt"></i> Login</button>
                                </Link>
                                <Link to='/register'>
                                    <button className='btn btn-primary'><i class="fas fa-user-plus"></i> Registration</button>
                                </Link>
                            </div>

                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;