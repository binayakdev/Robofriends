import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <input 
        className= 'search'
        type='search' 
        placeholder='search robots..'
        onChange={searchChange}  
        />
    );
}

export default SearchBox;