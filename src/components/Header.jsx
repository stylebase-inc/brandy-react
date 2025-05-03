import React from 'react';
import PropTypes from 'prop-types';
import logos from './assets/Logos.svg';
import './header.css';

const Header = ({ logoSrc }) => {
    return (
        <header className="header">
            <div className="logo-div">
                <img src={logoSrc || logos} alt="Logo" className="logo-img" />
            </div>
            <div className="right-header">
                <div className="search-div">
                    <div className="search-input-wrapper">
                        <img src="/assets/search-icon.svg" alt="Search" className="search-icon" />
                        <input type="text" placeholder="Search..." className="search-input" />
                        <span className="shortcut">/⌘K</span>
                    </div>
                </div>
                <div className="edit-mode">
                    <div className="edit-mode">
                        <img src="/assets/edit-icon.svg" alt="Edit" className="edit-icon" />
                        <span className="edit-text">Edit mode</span>
                        <img src="/assets/down-arrow.svg" alt="Arrow" className="arrow-icon" />
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    logoSrc: PropTypes.string,
};

export default Header;