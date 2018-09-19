import React from 'react';
import { NavLink } from 'react-router-dom';

let SideNavigation = () => 
    <div>
        <div><NavLink to="/">All</NavLink></div>
        <div><NavLink to="/categories/1">Hats</NavLink></div>
        <div><NavLink to="/categories/2">Tops</NavLink></div>
        <div><NavLink to="/categories/3">Pants</NavLink></div>
    </div>

export default SideNavigation;