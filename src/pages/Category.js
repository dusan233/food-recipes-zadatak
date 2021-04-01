import React from 'react';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { getCategoryMeals } from '../actions/categoryMeals';

const mapDispatchToProps = {
 getCategoryMeals
}

const Category = ({getCategoryMeals, ...props}) => {

    useEffect(() => {
        getCategoryMeals(props.match.params.categoryName);
    }, [props.match.params.categoryName, getCategoryMeals]);

    return (
        <div>
            <h1>Category</h1>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Category);
