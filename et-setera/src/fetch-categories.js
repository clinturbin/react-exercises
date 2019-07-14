import React from 'react';
import {API_URL} from './variables';

let fetchCategories = (Component, url) => 
    class FetchCategories extends React.Component {
        componentDidMount() {
            fetch(API_URL + url)
            .then(res => res.json())
            .then(result => {
                this.props.dispatch({
                    type: 'LOAD_CATEGORIES',
                    result: result
                })
            })
        }
        render() {
            return <Component {...this.props}/>
        }
    };

export default fetchCategories;