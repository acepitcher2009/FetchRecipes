import React from 'react';
import '../styles/styles.css'

const SearchBar = (props) => {
    return (
        <div className='row d-flex justify-content-center mx-auto my-auto'>
            <h3 className='textCenter spacing font'>Search Recipes:</h3>
            <input
                className='form-control spacing input'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Type to search...'
            ></input>

        </div >
    );
};

export default SearchBar;