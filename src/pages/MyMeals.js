import React from 'react';
import { useEffect } from 'react';

import { connect } from "react-redux";
import { getMyMeals } from '../actions/myMeals';
import RecipeCard from '../components/Recipe';

const mapStateToProps = state => ({
    loading: state.myMeals.loading,
    meals: state.myMeals.meals
})
const mapDispatchToProps = {
    getMyMeals
}

const MyMeals = ({getMyMeals, meals, loading}) => {
    useEffect(() => {
        getMyMeals()
    }, [getMyMeals])

    const renderRecipes = () => {
        return meals.map((meal, i) => {
            return (
                <RecipeCard key={i}  recipeId={meal.idMeal} recipeImg={meal.strMealThumb} recipeName={meal.strMeal} />
            )
        })
    }

    return (
        <div>
            <div className="section-heading">
                    My Meals
                </div>
                {loading ? <div className="loading-container">Loading...</div> :<React.Fragment>
                <div className="my-meals-recipes">
                    {renderRecipes()}
                </div>
                    </React.Fragment>}
               
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMeals)
