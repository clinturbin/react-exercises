import React from 'react';
import { NavLink } from 'react-router-dom';

let CategoryLink = (props) => console.log(props) ||
    <li>
        <NavLink to={`/categories/${props.category.categoryId}`}>{props.category.categoryName}</NavLink>
    </li>

export default CategoryLink;