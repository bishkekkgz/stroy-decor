import React from 'react';
import logo from '../assets/logo.jpg';
import { SlPhone, SlMagnifier, SlHeart } from "react-icons/sl";
import '../styles/navbar.scss';


const Navbar = () => {
    return (
        <div className='navbar-cont'>
            <nav>
                <ol>
                    <a href='#mainpage'><img src={logo} alt='logo'></img></a>
                    <a href='#mainpage'><SlPhone id='icon'/><p>0(705) 75-75-28</p></a>
                    <input className="search" placeholder='Найти товары' /><SlMagnifier id="icon" />
                    <SlHeart id='heart'/>
                    
                </ol>
            </nav>
        
        </div>
    )
}

export default Navbar
