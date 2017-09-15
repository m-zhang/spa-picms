import '../dist/css/single-page.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

// Don't forget to add your API key
filepicker.setKey("AmcPlMarHTdKL2TZF8Se1z");

// Our views are rendered inside the #content div
ReactDOM.render(
    Routes,
    document.getElementById('content')
);