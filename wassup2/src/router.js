import React from 'react';
import HomePage from './homepage-container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './about';
import Profile from './profile';
import Navigation from './navigation';

let NotFound = () => <h1>404 Not Found</h1>

let Router = () => 
    <HashRouter>
        <div>
            <Navigation/>
            {/* Switch - at most one of these routes can match
                will match first route found */}
            <Switch>
                {/* Think of route as an on off switch */}
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
                <Route path="*" component={NotFound} />
                {/* <Route path="/" component={NotFound} /> */}
                {/* <Route exact path="/" component={NotFound} /> */}
            </Switch>
        </div>
    </HashRouter>

export default Router;