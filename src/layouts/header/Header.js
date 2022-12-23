import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <h2 className='icon'>Redux CRUD App</h2>
            </div>
            <div>
                <nav>
                    <NavLink className='link' to={'/'}>Home</NavLink>
                    <NavLink className='link' to={'/show-books'}>Show Books</NavLink>
                    <NavLink className='link' to={'/add-book'}>Add Book</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;