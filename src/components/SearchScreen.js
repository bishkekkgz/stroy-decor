import React from 'react';
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';



const SearchScreen = () => {
    return (
        <div className='search-screen-cont'>
            <Link to="/"><LiaTimesSolid /></Link>
            <h1>Поиск</h1>
        
        </div>
    )
}

export default SearchScreen
