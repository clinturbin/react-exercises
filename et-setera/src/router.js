import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AllProductsPage from './all-products';
import CategoryPage from './category-page';
import ProductPage from './product-page';
import NotFound from './not-found';
import HeaderContainer from './header-container';
import SideNavigation from './side-navigation';

let Router = () => 
    <HashRouter>
        <div>
            <HeaderContainer />
            <div className='main-body'>
                <SideNavigation />
                <Switch>
                    <Route exact path='/' component={AllProductsPage} />
                    <Route 
                        exact path='/categories/:id'
                        render={(props) => <CategoryPage {...props} />}    
                    />
                    <Route 
                        exact path="/products/:id" 
                        render={(props) => <ProductPage {...props}/> }
                    />
                    <Route
                        exact path="/cart"
                            
                    />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </div>
    </HashRouter>

export default Router;