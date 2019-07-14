import React from 'react';
import CategoryLinks from './category-links';
import { connect } from 'react-redux';
import fetchCategories from './fetch-categories';

let SideNavigation = (props) =>
    <div>
        <CategoryLinks categories={props.categories} />
    </div>


export default connect(state => ({
    categories: state.categories
}))(fetchCategories(SideNavigation, '/category'));