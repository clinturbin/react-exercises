import React from 'react';
import CategoryLinks from './category-links';
import { connect } from 'react-redux';

let mapStateToProps = state => ({categories: state.categories})

let SideNavigation = (props) => console.log(props.categories) ||
    <div>
        <CategoryLinks categories={props.categories} />
    </div>

let ConnectedSideNavigation = connect(mapStateToProps)(SideNavigation);

export default ConnectedSideNavigation;