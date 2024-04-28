import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navblock.scss';

const NavBlockItems = () => {
    return (
        <div className='navBlockItems-container'>
            <div className='navOneLine'>
                <Link to="" className="link">Потолочные плинтуса для натяжных потолков</Link>
                <Link to="" className="link">Потолочные плинтуса</Link>
                <Link to="" className="link">Молдинги</Link>
                <Link to="" className="link">Потолочные плитки</Link>
                <Link to="" className="link">Розетки потолочные</Link>
            </div>
        
        </div>
    )
}

export default NavBlockItems
