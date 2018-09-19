import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AllProductsPage from './all-products';
import HatsPage from './hats-page';
import TopsPage from './tops-page';
import PantsPage from './pants-page';

let NotFound = () => <h1>404 Not Found</h1>

let Router = () => 
    <HashRouter>
        <div>
            <Switch>
                <Route exact path='/' component={AllProductsPage} />
                <Route exact path='/categories/1' component={HatsPage} />
                <Route exact path='/categories/2' component={TopsPage} />
                <Route exact path='/categories/3' component={PantsPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;