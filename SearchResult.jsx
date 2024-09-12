import React, { useState } from 'react';


const SearchResults = ({ results }) => {
    return (
        <ul className='search-results'>
            {results.map((results, index) => (
                <li key={index} className='search-result-item'>{result}</li>
            ))}
        </ul>
    );
};

export default SearchResults;