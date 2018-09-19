import React from 'react';
import { NavLink, Link } from 'react-router-dom';

let Navigation = () => 
    <div>
        <NavLink to="/wassups">Feed</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/profile">Profile</Link>
    </div>

export default Navigation;