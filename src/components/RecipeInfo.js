import React from 'react'

const RecipeInfo = ({category, country, video, tags, instructions}) => {
    return (
        <div className="recipe-info">
                    <div className="recipe__info">
                        <p><span>Category:</span>{category}</p>
                        <p><span>Country:</span>{country}</p>
                        <p><span>Video:</span><a href={video} target="_blank" rel="noreferrer">{video}</a></p>
                    </div>
                    <div className="recipe__instructions">
                        {instructions}
                    </div>
                    <div className="recipe__tags">
                        {tags && tags.split(",").map((tag, i) => {
                            return <div key={i} className="recipe__tag">
                                #{tag}
                            </div>
                        })}
                    </div>
                </div>
    )
}

export default RecipeInfo
