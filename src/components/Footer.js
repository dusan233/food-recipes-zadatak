import React from 'react'
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrap">
                <div className="footer__logo">
                    <img src={logo} alt="app logo"/>
                </div>
                <div className="footer__links">
                <ul className="links">
                    <li className="links__item links__item--facebook">
                        <a href="https://www.facebook.com/TheDataDB/" target="_blank" rel="noreferrer">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li className="links__item links__item--twitter">
                        <a href="https://twitter.com/TheAudioDB" target="_blank" rel="noreferrer">
                            <i class="fab fa-twitter-square"></i>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <p>Copyright - Dusan Jovanovic</p>
            </div>
        </div>
    )
}

export default Footer
