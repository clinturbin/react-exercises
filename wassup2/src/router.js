import React from 'react';
import HomePage from './homepage-container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './about';
import Profile from './profile';
import Navigation from './navigation';

let NotFound = () => <h1>404 Not Found</h1>

let WassupPage = (props) => <h1>Hi {props.match.params.id}</h1>

let Router = () => 
    <HashRouter>
        <div>
            <Navigation/>
            <Switch>
                <Route exact path="/wassups" component={HomePage} />
                <Route 
                    exact path="/wassups/:id" 
                    render={(props) => <WassupPage {...props}/> }
                />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;