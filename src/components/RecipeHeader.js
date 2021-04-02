import React from 'react'

const RecipeHeader = ({recipeTitle, recipeImg}) => {
    return (
        <div className="recipe-header">
                    <div className="recipe__title">
                        {recipeTitle}
                    </div>
                    <div className="recipe__img-container">
                        <img src={recipeImg} alt={recipeTitle}/>
                    </div>
          </div>
    )
}

export default RecipeHeader
