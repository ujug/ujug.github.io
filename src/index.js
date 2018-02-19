import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// content components
import Home from './content/home/Home';
import About from './content/about/About';
import Events from './content/events/Events';
import Contact from './content/contact/Contact';
import Talk from './content/talk/Talk';

// layout components
import Header from './layout/header/Header';

// PWA-ify
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <div>
            <Header />

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/talk" component={Talk}/>
            <Route exact path="/event" component={Events}/>
            <Route exact path="/contact" component={Contact}/>
        </div>
    </HashRouter>, 
    document.getElementById('root'));
registerServiceWorker();
