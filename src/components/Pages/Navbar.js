import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar flex flex-row lg:flex-col sm:px-4 items-center">
            <div className="icon-container mb-4 sm:mr-4 lg:mb-4">
                <FontAwesomeIcon icon={faSearch} className="nav-icon" />
            </div>
            <div className="icon-container mb-4 sm:mr-4 lg:mb-4">
                <FontAwesomeIcon icon={faHome} className="nav-icon" />
            </div>
            <div className="icon-container mb-4 sm:mr-4 lg:mb-4">
                <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
            </div>
            <div className="icon-container mb-4 sm:mr-4 lg:mb-4">
                <FontAwesomeIcon icon={faAddressCard} className="nav-icon" />
            </div>
            <div className="icon-container mb-4 sm:mr-4 lg:mb-4">
                <FontAwesomeIcon icon={faUser} className="nav-icon" />
            </div>
            <div className="icon-container mb-4 sm:mr-4 lg:mb-4">
                <FontAwesomeIcon icon={faBell} className="nav-icon" />
            </div>
            <div className="icon-container mb-4 sm:mr-4 lg:mb-4">
                <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
            </div>
        </div>
    );
};

export default Navbar;
