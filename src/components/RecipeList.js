import React from 'react';
import RecipeCard from './RecipeCard';
import '../styles/styles.css';

const RecipeList = (props) => {
    if (!props.recipes.length && props.searchValue.length) {
        return (
            <div>
                <h2 className='textCenter spacing font'>Sorry, No Recipes Found</h2>
            </div>
        )
    }
    return (
        <div>
            <h1 className='textCenter font'>Recipes</h1>
            <hr />
            <div className='row d-flex align-items-center mb-2'>
                {props.recipes.map((recipes, index) => (
                    <div className="col-sm-4">
                        <RecipeCard recipes={recipes} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeList;