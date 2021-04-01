import React from 'react';
import { useState } from 'react';
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
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        getCategoryMeals(props.match.params.categoryName);
    }, [props.match.params.categoryName, getCategoryMeals]);


    const renderRecipes = () => {
        return meals.filter(meal => {
            return meal.strMeal.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        }).map(meal => {
            return (
                <RecipeCard recipeId={meal.idMeal} recipeImg={meal.strMealThumb} recipeName={meal.strMeal} />
            )
        })
    }

    const onInputChange = (e) => {
        setSearchValue(e.target.value);
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
            <div className="recipe-filter-container">
            <div className="search-container">
                        <input onChange={onInputChange} value={searchValue} placeholder="Search recipes" className="search-container__input" type="text"/>
                        <span className="search-container__icon">
                            <i className="fas fa-search"></i>
                        </span>
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
