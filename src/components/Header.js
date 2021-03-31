import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as authActions from '../actions/authentication';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    authenticated: state.authenticated
})

const mapDispatchToProps = {
    ...authActions
}

const registeredUsers = [
    {email: "user1@gmail.com", password: "user11"},
    {email: "user2@gmail.com", password: "user22"}
]

const Header = ({authenticated, ...props}) => {
    const [showLogin, setShowLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validErrorMsg, setValidErrorMsg] = useState("");
    const location = useLocation();

    const logIn = (e) => {
        e.preventDefault();
        const invalidEmail = registeredUsers.find(user => user.email === email);
        if (!invalidEmail) return setValidErrorMsg("No user with provided email.");
        const invalidPassword = registeredUsers.find(user => user.password === password);
        if (!invalidPassword) return setValidErrorMsg("Incorrect Password.");
        
        props.login();
        setValidErrorMsg("");
        setEmail("");
        setPassword("");
        setShowLogin((prevVal) => !prevVal)
        
    }


    const onChangeInput = (e) => {
        if(e.target.name === "email") {
            setEmail(e.target.value)
        }else {
            setPassword(e.target.value);
        }
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
                                    
                                    <input onChange={onChangeInput} name="email" value={email} placeholder="Email" size="20" required  type="email"/>
                                </div>
                                <div className="input-control">
                                    
                                    <input onChange={onChangeInput} name="password" value={password} minLength="6" maxLength="15" required placeholder="Password" type="password"/>
                                </div>
                                {validErrorMsg ? <div className="login__error">
                                        {validErrorMsg}
                                    </div>: null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
