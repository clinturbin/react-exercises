import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Don't use Link or NavLink component when going to other webpage
// They are only for dealing with redirecting on current site

let Navigation = () => 
    <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/profile">Profile</Link>
        {/* <a href='#/home'>Home</a>
        <a href='#/about'>About</a>
        <a href='#/profile'>Profile</a> */}
    </div>

export default Navigation;