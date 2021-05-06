import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import '../styles/styles.css'

const Main = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getRecipeRequest = async (searchValue) => {
        const url = `http://www.recipepuppy.com/api/?q=${searchValue}`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.results) {
            setRecipes(responseJson.results);
        }

    };


    useEffect(() => {
        if (searchValue) {
            getRecipeRequest(searchValue);
        }
    }, [searchValue]);


    return (
        <div className='container-fluid'>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <RecipeList recipes={recipes} searchValue={searchValue} />
        </div>
    )
}

export default Main;