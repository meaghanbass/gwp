import React, { Component } from 'react';
import './app.scss';
import Header from './components/header/index';
import Footer from './components/footer/index';
import BGI from './components/fixedBg';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div id="theme" className="light">
        <Header />
        <BGI />
        <HashRouter>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/contact" component={Contact}/>
            </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
