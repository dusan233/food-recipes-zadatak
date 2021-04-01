import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {getSearchRecipes} from '../actions/search';

import RecipeCard from '../components/Recipe';

const mapStateToProps = (state) => ({
    meals: state.search.meals,
    loading: state.search.loading,
    randomMeal: state.randomMeal
})
const mapDispatchToProps = {
    getSearchRecipes
}

const Search = ({getSearchRecipes, meals, loading, randomMeal, ...props}) => {
    const [category, setCategory] = useState("Categories");
    useEffect(() => {
        getSearchRecipes(props.match.params.recipeName)
    }, [props.match.params.recipeName, getSearchRecipes])

    const renderRecipes = () => {
        return meals.filter(meal => {
            return category === "Categories" ? true : meal.strCategory === category
        }).map((meal, i) => {
            return (
                <RecipeCard key={i} extra recipeArea={meal.strArea} recipeCategory={meal.strCategory} recipeId={meal.idMeal} recipeImg={meal.strMealThumb} recipeName={meal.strMeal} />
            )
        })
    }
    const onChangeSelect = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div>
            <div className="section-heading">
                   Search results
            </div>
            {loading ? <div className="loading-container">Loading...</div> : <React.Fragment>
            <h2 style={{marginBottom: "20px"}}>Our Recomendation</h2>
            <div className="recipe-card-container">
            <RecipeCard extra recipeArea={randomMeal.strArea} recipeCategory={randomMeal.strCategory} recipeId={randomMeal.idMeal} recipeImg={randomMeal.strMealThumb} recipeName={randomMeal.strMeal} />
            </div>
            <div className="recipe-filter-container">
                <select className="filter-categories" onChange={onChangeSelect} value={category}>
                    <option value="Categories">All Categories</option>
                    <option value="Beef">Beef</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Lamb">Lamb</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Pork">Pork</option>
                </select>
            </div>
            <div className="section-devider"></div>
            <div className="search-recipes">
               {renderRecipes()}
            </div>
                </React.Fragment>}
            
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
