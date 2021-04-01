import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategoryMeals } from '../actions/categoryMeals';

import RecipeCard from '../components/Recipe';

const mapStateToProps = (state) => ({
    meals: state.categoryMeals.meals,
    recomendedMeal: state.categoryMeals.recomendedMeal,
    loading: state.categoryMeals.loading
})
const mapDispatchToProps = {
 getCategoryMeals
}

const Category = ({getCategoryMeals, meals, recomendedMeal, loading, ...props}) => {

    useEffect(() => {
        getCategoryMeals(props.match.params.categoryName);
    }, [props.match.params.categoryName, getCategoryMeals]);


    const renderRecipes = () => {
        return meals.map(meal => {
            return (
                <RecipeCard recipeId={meal.idMeal} recipeImg={meal.strMealThumb} recipeName={meal.strMeal} />
            )
        })
    }


    return (
        <div>
            <div className="section-heading">
                    {props.match.params.categoryName}
            </div>
            {loading ? <div className="loading-container">Loading...</div>: <React.Fragment>
            <div className="recomended-recipe">
            <h2 style={{marginBottom: "20px"}}>Our Recomendation</h2>
            <div className="recipe-card-container">
            <RecipeCard recipeId={recomendedMeal.idMeal} recipeImg={recomendedMeal.strMealThumb} recipeName={recomendedMeal.strMeal} />
            </div>
            
            </div>
            <div className="section-devider"></div>
            <div className="category-recipes">
               {renderRecipes()}
            </div>
            </React.Fragment> }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
