import React from 'react'
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrap">
                <div className="footer__logo">
                    <img src={logo} alt="app logo"/>
                </div>
                <div className="footer__links"></div>
            </div>
            <div className="footer__copyright"></div>
        </div>
    )
}

export default Footer
