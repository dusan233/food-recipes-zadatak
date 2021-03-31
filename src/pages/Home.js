import React from 'react'
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { getCategories } from '../actions/categories';
import CategoryCard from '../components/CategoryCard';
import Contact from '../components/Contact';

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
            <CategoryCard 
                key={i}
                categoryId={cat.idCategory} 
                categoryName={cat.strCategory} 
                categoryImg={cat.strCategoryThumb} 
            />
        ))
    }

    return (
        <div>
            <div className="section-heading">
                    Categories
                </div>
            <div className="categories-container">
                
                {listCategories()}
            </div>
            <div className="section-heading">
                    Contact
                </div>
            <Contact/>
        </div>
    )
}

export default connect(mapStateToProos, mapDispatchToProps)(Home);
