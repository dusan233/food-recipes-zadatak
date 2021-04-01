import React from 'react';
import cookingImg from '../assets/cooking.png';
import {HashLink as Link} from 'react-router-hash-link';

const HomeHeader = () => {
    return (
        <div className="home-header">
            <div className="home-header__content">
                <h1>Food Recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo unde, ea eligendi perspiciatis nostrum similique dolore nemo possimus eos eaque sed quidem magni cum excepturi cupiditate quasi sunt hic!</p>
                <Link smooth className="btn btn--large" to="/#categories">
                    Categories  <i className="fas fa-angle-down"></i>
                </Link>
            </div>
            <div className="home-header__img-container">
                <img src={cookingImg} alt=""/>
            </div>
        </div>
    )
}

export default HomeHeader
