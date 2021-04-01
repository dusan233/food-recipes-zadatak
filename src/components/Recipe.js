import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({recipeName, recipeImg, recipeId}) => {
    return (
        <div className="recipe-card">
                <Link to={{pathname: `/single-meal/${recipeId}`}}>
                    <div className="recipe-card__img-container">
                        <img src={recipeImg} alt={recipeName}/>
                    </div>
                </Link>
                <div className="recipe-card__title">
                    {recipeName}
                </div>
            </div>
    )
}

export default Recipe
