import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let WassupRow = (props) => 
    <li>
        <p>{props.wassup.content}</p>
        <Link to={`/wassups/${props.wassup.id}`}>Read More</Link>
        <button
            onClick={()=> {
                props.dispatch({type: 'REMOVE_WASSUP', id: props.wassup.id})
            }}
        >Delete</button>
    </li>

let ConnectedWassupRow = connect()(WassupRow);

export default ConnectedWassupRow;