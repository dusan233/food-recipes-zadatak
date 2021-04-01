import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import * as authActions from '../actions/authentication';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    authenticated: state.authanticated
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
    const [searchValue, setSearchVal] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validErrorMsg, setValidErrorMsg] = useState("");
    const location = useLocation();

    const onLogIn = (e) => {
        e.preventDefault();
        const invalidEmail = registeredUsers.find(user => user.email === email);
        if (!invalidEmail) return setValidErrorMsg("No user with provided email.");
        const invalidPassword = registeredUsers.find(user => user.password === password);
        if (!invalidPassword) return setValidErrorMsg("Incorrect Password.");
        
        props.login();
        localStorage.setItem("auth", true);
        setValidErrorMsg("");
        setEmail("");
        setPassword("");
        setShowLogin((prevVal) => !prevVal)
        
    }

    const onLogout = () => {
        props.logout();
        localStorage.setItem("auth", false);
        setShowLogin((prevVal) => !prevVal)
    }


    const onChangeInput = (e) => {
        if(e.target.name === "email") {
            setEmail(e.target.value)
        }else if(e.target.name === "search") {
            setSearchVal(e.target.value)
        }
        else {
            setPassword(e.target.value);
        }
    }
    
    return (
        <div className="header">
            <div className="header__left">
                <form>
                    <div className="search-container">
                        <input onChange={onChangeInput} name="search" placeholder="Search recipes" value={searchValue} className="search-container__input" type="text"/>
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
                            {authenticated ? (
                                <button onClick={onLogout} className="btn">
                                    Logout
                                </button>
                             ) : (<form onSubmit={onLogIn}>
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
                            </form>)
                             }
                        </div>
                    </li>
                    {location.pathname === "/" ? null : <li className="menu__item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>}
                    <li className="menu__item">
                        <HashLink smooth to="/#about">
                        About Us
                        </HashLink>
                    </li>
                    <li className="menu__item">
                    <HashLink smooth to="/#contact">
                        Contact
                        </HashLink>
                    </li>
                    {authenticated ? <li className="menu__item">
                        <a href="#papi
                        ">
                            My Meals
                        </a>
                    </li>: null}
                    
                </ul>
                
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
