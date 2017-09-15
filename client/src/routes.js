import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { AddPictureContainer, PicturesContainer } from './containers';
import { Home, Archive, Welcome, About, Contact } from './components';

// Use hashHistory for easier development
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Route>
        <Route path="/pictures" component={Archive}>
            <IndexRoute component={PicturesContainer} />
            <Route path="add" component={AddPictureContainer} />
        </Route>
    </Router>
);

export default routes;