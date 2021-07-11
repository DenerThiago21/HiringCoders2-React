import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/repositories" exact component={Repositories} />
            </Switch>
        </BrowserRouter>
    );
}