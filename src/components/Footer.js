import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='logo-container'>
                <Link to="/"><img src={logo} alt='logo' id='logo'/></Link>
            </div>
            <div className='navOneLineLinks'>
                <Link to="/plintusnatyazhnye" className="links"> Плинтуса для натяжных потолков</Link>
                <Link to="/plintus" className="links">Потолочные плинтуса</Link>
                <Link to="/molding" className="links">Молдинги</Link>
                <Link to="" className="links">Потолочные плитки</Link>
                <Link to="" className="links">Розетки потолочные</Link>
            </div>
            <line />
            <p className='years-text'>&#169; 2023-2024</p>
        </div>
    )
}

export default Footer
