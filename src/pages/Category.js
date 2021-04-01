import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategoryMeals } from '../actions/categoryMeals';

const mapStateToProps = (state) => ({
    meals: state.categoryMeals.meals,
    loading: state.categoryMeals.loading
})
const mapDispatchToProps = {
 getCategoryMeals
}

const Category = ({getCategoryMeals, ...props}) => {

    useEffect(() => {
        getCategoryMeals(props.match.params.categoryName);
    }, [props.match.params.categoryName, getCategoryMeals]);


    

    return (
        <div>
            <div className="section-heading">
                    {props.match.params.categoryName}
            </div>
            <div className="recomended-meal">
                
            </div>
            <div className="section-devider"></div>
            <div className="category-recipes">

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
