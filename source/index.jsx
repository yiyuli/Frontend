import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Home from './components/Home/Home.jsx';
import Page from './components/Page/Page.jsx';
import './js/bootstrap.bundle.min';
import './js/jquery.min'

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');
require('./styles/bootstrap.min.css');
require('./styles/content.css');
require('./styles/shop-homepage.css');



const BaseLayout = () => (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">EJP Prototype</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

)
render(
    <div className="full">
    <BaseLayout/>
<Router>
    <div className="full">
        <Route path="/" exact component={Home} />
        <Route path="/page:id" component={Page} />
    </div>
</Router>
    </div>,

    // Define your router and replace <Home /> with it!
    document.getElementById('app')
);
