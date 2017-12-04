import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Home from './components/Home/Home.jsx';
import './js/bootstrap.bundle.min';
import './js/jquery.min'

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');
require('./styles/bootstrap.min.css');
require('./styles/content.css');
require('./styles/shop-homepage.css');


render(
    <Home />,
    // Define your router and replace <Home /> with it!
    document.getElementById('app')
);
