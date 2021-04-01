import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {getSearchRecipes} from '../actions/search';

const mapDispatchToProps = {
    getSearchRecipes
}

const Search = ({getSearchRecipes, ...props}) => {
    useEffect(() => {
        getSearchRecipes(props.match.params.recipeName)
    }, [props.match.params.recipeName, getSearchRecipes])

    return (
        <div>
            <div className="section-heading">
                   Search results
            </div>
            <div className="section-devider"></div>
            <div className="search-recipes">
               
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Search);
