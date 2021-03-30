import React from 'react'

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
           
            </div>
        </div>
    )
}

export default Header
