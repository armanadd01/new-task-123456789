import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logoImg from '../../images/logo.png';

const Header = () => {
    return (
        <div className="container-fluid border-bottom border-primary"> 
            <div className="header-bottom">
                <div className="navbar navbar navbar-expand-lg navbar-light">
                    <div className="col-md-3 col-sm-3 navbar-brand">
                        <img className="w-25 h-25 ms-5" src={logoImg} alt="" />
                    </div>
                    <div className="col-md-9 col-sm-5 text-center">
                        <nav className="container-fluid">
                            <ul className="navbar-nav ">
                                <li className="nav-item p-2">
                                    <NavLink className="nav-link fs-4" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item p-2">
                                    <NavLink className="nav-link fs-4" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item p-2">
                                    <NavLink className="nav-link fs-4" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item p-2">
                                    <NavLink className="nav-link fs-4" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;