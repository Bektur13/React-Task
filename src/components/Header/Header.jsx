import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header__content'>
            <Link to='/'>
                <button className='header__button'>Posts</button>
            </Link>
            <Link to='users'>
                <button className='header__button'>Users</button>
            </Link>
        </div>
    )
}

export default Header;