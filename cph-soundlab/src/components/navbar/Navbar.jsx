import React from 'react';
import './_navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__button">
                <span className="navbar__button__line navbar__button__line--1"></span>
                <span className="navbar__button__line navbar__button__line--2"></span>
                <span className="navbar__button__line navbar__button__line--3"></span>
            </div>
            {/* <a href="#" className="navbar__link">About</a>
            <a href="#" className="navbar__link">Work</a>
            <a href="#" className="navbar__link">Studio</a>
            <a href="#" className="navbar__link">Contact</a> */}
        </div>
    )
}

export default Navbar;
