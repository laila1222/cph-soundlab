import React from 'react';
import './_navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <a href="#" className="navbar__link">About</a>
            <a href="#" className="navbar__link">Work</a>
            <a href="#" className="navbar__link">Studio</a>
            <a href="#" className="navbar__link">Contact</a>
        </div>
    )
}

export default Navbar;
