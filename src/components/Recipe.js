import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({recipeName, recipeImg, recipeId, recipeArea, recipeCategory, extra}) => {
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
                {extra ? <div className="recipe-card__extra-info">
                    <p>Category: <span>{recipeCategory}</span> </p>
                    <p>Country: <span>{recipeArea}</span></p>
                </div> : null }
            </div>
    )
}

export default Recipe
