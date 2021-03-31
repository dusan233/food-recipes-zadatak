import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const registeredUsers = [
    {email: "user1@gmail.com", password: "user11"},
    {email: "user2@gmail.com", password: "user22"}
]

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const location = useLocation();

    const logIn = (e) => {
        e.preventDefault();
        console.log('hej');
    }
    
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
                            <form onSubmit={logIn}>
                                <div className="input-control">
                                    
                                    <input placeholder="Email" size="20" required  type="email"/>
                                </div>
                                <div className="input-control">
                                    
                                    <input minLength="6" maxLength="15" required placeholder="Password" type="password"/>
                                </div>
                                <button type="submit" className="btn">
                                    Login
                                </button>
                            </form>
                        </div>
                    </li>
                    {location.pathname === "/" ? null : <li className="menu__item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>}
                    <li className="menu__item">
                        <Link to="#papi">
                        About Us
                        </Link>
                    </li>
                    <li className="menu__item">
                        <a href="#some
                        ">
                            Contact
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#papi
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
