import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Molding from '../catalog/prdec-molding';
import Plintus from '../catalog/prdec-plintus';
import PlintusNat from '../catalog/prdec-plintus-nat';
import SearchToggle from './SearchToggle';
import logo from '../assets/logo.jpg';
import { SlPhone, SlMagnifier, SlBasket, SlMenu } from "react-icons/sl";
import '../styles/navbar.scss';

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        const allProducts = [...Molding, ...Plintus, ...PlintusNat];
        const results = allProducts.filter((product) =>
            product.image.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(results);
        setShowSearchResults(true);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setShowSearchResults(false);
    };

    const handleClickItem = (id) => {
        navigate(`/productDetails/${id}`);
        setShowSearchResults(false);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit} className='navbar-cont'>
                <Link to="/"><img src={logo} alt='logo' /></Link>
                    <a href={`https://wa.me/+996705757528`} target="_blank" rel="noopener noreferrer"><SlPhone id='icon' /><p>0(705) 75-75-28</p></a>
                    <input
                        id='search'
                        type='text'
                        placeholder='Search'
                        className='search'
                        maxLength={128}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button type="submit" className='submit'>Search</button>
                    <Link to="/basketProducts"><SlBasket id='heart' /></Link>
                    <SlMenu id='menuBar' className='menu-icon' onClick={toggleMenu} />
            </form>
            {showSearchResults && (
                <div className='search-results-container'>
                    {searchResults.map((result, index) => (
                        <Link key={index} to={`/productDetails/${result.id}`}>
                            <SearchToggle product={result} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
