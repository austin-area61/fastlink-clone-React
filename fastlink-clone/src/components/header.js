import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <h1><span className="fast">Fast</span><span className="link">Link</span>.<span className="net">Net</span></h1>
                <nav>
                    <a href="#">Home</a>
                    <a href="#footer">About</a>
                    <a href="#footer">Services</a>
                    <a href="#footer">Contact</a>
                </nav>
                <div className="search-cart">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                    <button>Cart</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
