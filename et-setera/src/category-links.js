import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryLink from './category-link';

let CategoryLinks = (props) => console.log(props) ||
    <ul>
        <li><div><NavLink to="/">All</NavLink></div></li>
        { props.categories.map( category => 
            <CategoryLink category={category} key={category['categoryId']}/>
        )}
    </ul>

export default CategoryLinks;