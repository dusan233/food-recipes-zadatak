import React from 'react'
import {Link} from 'react-router-dom';

const CategoryCard = ({categoryId, categoryImg, categoryName}) => {
    return (
        <Link className="category" to={`/category/${categoryId}`}>
                <div>
                    <div className="category__img-container">
                        <img src={categoryImg} alt=""/>
                    </div>
                    <div className="category__name">
                        {categoryName}
                    </div>
                </div>
        </Link>
    )
}

export default CategoryCard
