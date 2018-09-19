import React from 'react';
import HeaderContainer from './header-container';
import SideNavigation from './side-navigation';

let TopsPage = () => 
    <div>
        <HeaderContainer />
        <SideNavigation />
        <h1>Tops</h1>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>

export default TopsPage;