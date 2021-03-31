import React from 'react'
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../actions/categories';


const mapStateToProos = (state) => ({
    categories: state.categories.categoriesList,
    loadingCategories: state.categories.loading
})

const mapDispatchToProps = {
 getCategories
}

const Home = ({getCategories, categories}) => {

    useEffect(() => {
        getCategories()
    }, [getCategories]) 


    const listCategories = () => {
        return categories.map((cat, i) => (
            <Link className="category" key={i} to={`/category/${cat.idCategory}`}>
                <div>
                    <div className="category__img-container">
                        <img src={cat.strCategoryThumb} alt=""/>
                    </div>
                    <div className="category__name">
                        {cat.strCategory}
                    </div>
                </div>
            </Link>
        ))
    }

    return (
        <div>
            <h1>Home</h1>
            <div className="categories-container">
                {listCategories()}
            </div>
        </div>
    )
}

export default connect(mapStateToProos, mapDispatchToProps)(Home);
