import React from 'react';
import WassupInputFormContainer from './wassup-form-container';
import WassupList from './wassup-list';
// import Route from 'react-router-dom';

// let Updates = () => <p>Updates</p>

let HomePage = (props) => 
    <div>
        <h1>Wassup!!!</h1>
        {/* You can define routes in other components */}
        {/* <Route path="/home/updates" component={Updates} /> */}
        <WassupInputFormContainer addWassup={props.addWassup}/>
        <WassupList wassups={props.wassups}/>
    </div>

export default HomePage;