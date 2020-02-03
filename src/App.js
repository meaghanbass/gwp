import React, { Component } from 'react';
import './app.scss';
import Header from './components/header/index';
import Footer from './components/footer/index';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ParallaxProvider } from 'react-skrollr';

class App extends Component {
  render() {
    return (
      <ParallaxProvider
      init={{
        smoothScrollingDuration: 500,
        smoothScrolling: true,
        forceHeight: false
      }}>
      <div>
        <Header />
        <HashRouter>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/contact" component={Contact}/>
            </div>
        </HashRouter>
        <Footer />
      </div>
      </ParallaxProvider>
    );
  }
}

export default App;
