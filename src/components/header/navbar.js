import React from 'react';
import { NavLink, HashRouter } from "react-router-dom";

class Navbar extends React.Component {
    render(){
        return (
            <React.Fragment>
                <HashRouter>
                    <nav>
                        <ul className="header">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/stuff">Stuff</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </HashRouter>
            </React.Fragment>
        );
    }
}

export default Navbar;