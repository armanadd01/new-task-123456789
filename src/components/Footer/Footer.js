import React from 'react';
import logoImg from '../../images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid mt-5 bg-dark text-center">
            <div className="footer-top p-5">
                <img className=" m-5 footer-img" src={logoImg} alt="" />
                <div className="copy-rights">
                    <p className="text-bold text-light fs-5">Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;