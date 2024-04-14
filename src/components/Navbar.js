import React from 'react';
import logo from '../assets/logo.jpg';
import { SlPhone, SlMagnifier, SlHeart } from "react-icons/sl";
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleSearch = () => {
        if (window.innerWidth <= 768) {
            window.location.href = "/search";
        }
    };

    return (
        <div className='navbar-cont'>
            <nav>
                <ol>
                    <Link to="/"><img src={logo} alt='logo' /></Link>
                    <a href={`https://wa.me/+996705757528`} target="_blank" rel="noopener noreferrer"><SlPhone id='icon' /><p>0(705) 75-75-28</p></a>
                    <input className="search" placeholder='Найти товары'/><SlMagnifier id="icon" onClick={handleSearch} />
                    <SlHeart id='heart' />
                </ol>
            </nav>
        </div>
    );
};

export default Navbar;
