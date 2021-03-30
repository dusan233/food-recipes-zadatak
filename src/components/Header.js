import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                    <li className="menu__item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="menu__item">
                        <a href="">
                        About Us
                        </a>
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
                    <li className="menu__item">
                        <i className="fas fa-user-circle"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
