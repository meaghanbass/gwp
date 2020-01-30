import React, { Component } from 'react';
import './app.scss';
import Header from './components/header/index';
import Footer from './components/footer/index';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div id="theme" className="light">
        <Header />
        <HashRouter>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
            </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
