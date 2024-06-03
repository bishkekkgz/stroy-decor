import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Molding from '../catalog/prdec-molding';
import Plintus from '../catalog/prdec-plintus';
import PlintusNat from '../catalog/prdec-plintus-nat';
import SearchToggle from './SearchToggle';
import logo from '../assets/logo.jpg';
import { SlPhone, SlBasket, SlMenu, SlMagnifier } from "react-icons/sl";
import '../styles/navbar.scss';

function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        const allProducts = [...Molding, ...Plintus, ...PlintusNat];
        const results = allProducts.filter((product) =>
            product.image.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(results);
        setShowSearchResults(value !== '');
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setShowSearchResults(true);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <form onSubmit={handleSearchSubmit} className='navbar-cont'>
                <Link to="/"><img src={logo} alt='logo' /></Link>
                <a href={`https://wa.me/+996705757528`} target="_blank" rel="noopener noreferrer"><SlPhone id='icon' /><p>0(705) 75-75-28</p></a>
                {isSmallScreen ? (
                    <SlMagnifier id='search-btn' className='search-btn' />
                ) : (
                    <>
                        <input
                            id='search'
                            type='text'
                            placeholder='Search'
                            className='search'
                            maxLength={128}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        {showSearchResults && searchResults.length > 0 ? (
                            <a href={`/productDetails/${searchResults[0]?.id}`} className='submit'>Search</a>
                        ) : (
                            <button type="submit" className='submit'>Search</button>
                        )}
                    </>
                )}
                <Link to="/basketProducts"><SlBasket id='heart' /></Link>
            </form>
            {showSearchResults && searchResults.length > 0 && (
                <div className='search-results-container'>
                    {searchResults.map((result, index) => (
                        <p id='searched-p' key={index}>
                            <a href={`/productDetails/${result.id}`} className='searched-item'>
                                <SearchToggle product={result} weight="700" />
                            </a>
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
