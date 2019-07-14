import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AllProductsPage from './all-products';
import CategoryPage from './category-page';
import ProductPage from './product-page';
import NotFound from './not-found';

let Router = () => 
    <HashRouter>
        <Switch>
            <Route exact path='/' component={AllProductsPage} />
            <Route 
                exact path='/category/:id'
                render={(props) => <CategoryPage {...props} />}    
            />
            <Route 
                exact path="/product/:id" 
                render={(props) => <ProductPage {...props}/> }
            />
            <Route path="*" component={NotFound} />
        </Switch>
    </HashRouter>

export default Router;