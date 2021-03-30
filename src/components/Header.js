import React from 'react';
import { useState } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const location = useLocation();
    
    return (
        <div className="header">
            <div className="header__left">
                <form>
                    <div className="search-container">
                        <input placeholder="Search recipes" className="search-container__input" type="text"/>
                        <span className="search-container__icon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </form>
            </div>
            <div className="header__right">
                <ul className="menu">
                <li  className="menu__item menu__item--icon">
                        <i onClick={() => setShowLogin((prevVal) => !prevVal)} className="fas fa-user-circle"></i>
                        <div className="login" style={{display: showLogin ? "block": "none"}}>
                            <div className="input-control">
                                
                                <input placeholder="Email"  type="email"/>
                            </div>
                            <div className="input-control">
                                   
                                <input placeholder="Password" type="password"/>
                            </div>
                            <button className="btn">
                                Login
                            </button>
                        </div>
                    </li>
                    {location.pathname === "/" ? null : <li className="menu__item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>}
                    <li className="menu__item">
                        <Link to="/category">
                        About Us
                        </Link>
                    </li>
                    <li className="menu__item">
                        <a href="
                        ">
                            Contact
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="
                        ">
                            My Meals
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;
