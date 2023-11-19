import React from "react";

import { Link } from 'react-router-dom';
import '../assets/styles/Nav.css';
import Navbar from '../UI/Navbar';
function NavbarComponent () {
    return (
     <Navbar links={[
        <Link key={1} 
        className="nav-link text light" to="/">
            About Me
        </Link>,
        <Link key={2}
        className="nav-link text light" to="/Contact">
            Contact
        </Link>,
        <Link key={3}
        className="nav-link text light" to="/Resume">
            Resume
        </Link>,
        <Link key={4}
        className="nav-link text light" to="/Portfolio">
            Portfolio
        </Link>
     ]}
     />
    );
};

export default NavbarComponent;