import React from 'react'

const IngredientsList = ({meal}) => {

    const renderIngredients = () => {
        const ingredients = [];
        const measures = [];
        for(let key in meal) {
            if(key.indexOf("strIngredient") > -1) {
                ingredients.push(meal[key])
            }else if(key.indexOf("strMeasure") > -1) {
                measures.push(meal[key]);
            }
        }
        console.log(ingredients);
        console.log(measures);
        return ingredients.map((ing, i) => {
             if(ing !== "") {
                return <div key={i} className="recipe__ingredient">
                <div className="recipe__ingredient-name">{ing}</div>
                <div className="recipe__ingredient-measure">{measures[i]}</div>
            </div>
             }
             return null
        })
    }

    return (
        <div className="recipe__ingredients">
                     {renderIngredients()}
                 </div>
    )
}

export default IngredientsList
