import React from 'react';

const SearchToggle = ({ product, weight }) => {
    return (
        <div className='search-answer-container'>
            <p>{product.image}</p>
            <p style={{ fontWeight: weight }}>{product.price} сом</p>
        </div>
    );
};


export default SearchToggle;