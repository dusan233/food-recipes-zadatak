import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {getSearchRecipes} from '../actions/search';

import RecipeCard from '../components/Recipe';

const mapStateToProps = (state) => ({
    meals: state.search.meals,
    loading: state.search.loading
})
const mapDispatchToProps = {
    getSearchRecipes
}

const Search = ({getSearchRecipes, meals, loading, ...props}) => {
    useEffect(() => {
        getSearchRecipes(props.match.params.recipeName)
    }, [props.match.params.recipeName, getSearchRecipes])

    const renderRecipes = () => {
        return meals.map(meal => {
            return (
                <RecipeCard extra recipeArea={meal.strArea} recipeCategory={meal.strCategory} recipeId={meal.idMeal} recipeImg={meal.strMealThumb} recipeName={meal.strMeal} />
            )
        })
    }

    return (
        <div>
            <div className="section-heading">
                   Search results
            </div>
            {loading ? <div className="loading-container">Loading...</div> : <React.Fragment>
            <div className="section-devider"></div>
            <div className="search-recipes">
               {renderRecipes()}
            </div>
                </React.Fragment>}
            
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
