import React from 'react';
import { useEffect } from 'react';
import {connect} from "react-redux";
import { getSingleMealData } from '../actions/singleMeal';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInfo from '../components/RecipeInfo';
import IngredientList from '../components/IngredientsList';

const mapStateToProps = state => ({
    loading: state.singleMeal.loading,
    meal: state.singleMeal.meal
})
const mapDispatchToProps = {
    getSingleMealData
}

const SingleMeal = ({getSingleMealData, meal,loading,  ...props}) => {
    useEffect(() => {
        getSingleMealData(props.match.params.recipeId)
    }, [props.match.params.recipeId, getSingleMealData])
    
    

    return (
        <div className="recipe">
            {loading ? <div className="loading-container">Loading...</div>: <React.Fragment>
                
            <div className="recipe-main">
                <RecipeHeader recipeImg={meal.strMealThumb} recipeTitle={meal.strMeal} />
                <RecipeInfo category={meal.strCategory}
                 video={meal.strYoutube} 
                 country={meal.strArea}  
                 instructions={meal.strInstructions}
                 tags={meal.strTags}
                 />
                 
            </div>
            <div className="recipe-bottom">
                <h3>Ingredients</h3>
                     <IngredientList meal={meal} />
               
            </div>
                </React.Fragment>}
            
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal)
