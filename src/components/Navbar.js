import React, {useState} from 'react';
import logo from '../assets/logo.jpg';
import { SlPhone, SlMagnifier, SlBasket, SlMenu } from "react-icons/sl";
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleSearch = () => {
        if (window.innerWidth <= 768) {
            window.location.href = "/search";
        }else{
            // getinput and search data from json
        }
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar-cont'>
            <nav>
                <ol>
                    <Link to="/"><img src={logo} alt='logo' /></Link>
                    <a href={`https://wa.me/+996705757528`} target="_blank" rel="noopener noreferrer"><SlPhone id='icon' /><p>0(705) 75-75-28</p></a>
                    <input className="search" placeholder='Найти товары'/><SlMagnifier id="icon" onClick={handleSearch} />
                    <Link to="/basketProducts"><SlBasket id='heart' /></Link>
                    <SlMenu id='menuBar' className='menu-icon' onClick={toggleMenu} />
                </ol>
            </nav>
        </div>
    );
};

export default Navbar;
