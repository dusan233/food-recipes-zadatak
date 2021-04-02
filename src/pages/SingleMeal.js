import React from 'react';
import { useEffect } from 'react';
import {connect} from "react-redux";
import { getSingleMealData } from '../actions/singleMeal';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInfo from '../components/RecipeInfo';

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
            <div className="recipe-main">
                <RecipeHeader recipeImg={meal.strMealThumb} recipeTitle={meal.strMeal} />
                <RecipeInfo category={meal.strCategory}
                 video={meal.strYoutube} 
                 country={meal.strArea}  
                 instructions={meal.strInstructions}
                 tags={meal.strTags}
                 />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal)
