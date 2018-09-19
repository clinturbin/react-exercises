import React from 'react';
import { Link } from 'react-router-dom';

let WassupRow = (props) => 
    <li>
        <p>{props.wassup.content}</p>
        <Link to={`/wassups/${props.wassup.id}`}>Read More</Link>
    </li>
    

export default WassupRow;