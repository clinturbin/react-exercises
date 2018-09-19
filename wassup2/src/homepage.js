import React from 'react';
import WassupInputFormContainer from './wassup-form-container';
import WassupList from './wassup-list';

let HomePage = (props) => 
    <div>
        <h1>Wassup!!!</h1>
        <WassupInputFormContainer addWassup={props.addWassup}/>
        <WassupList wassups={props.wassups}/>
    </div>

export default HomePage;