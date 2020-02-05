import React from 'react';
import { NavLink, HashRouter } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonLt from '../../components/buttons/button-lt';

class Header extends React.Component {
    render(){
        return (
            <React.Fragment>
                <header>
                    <div className="container">
                        <HashRouter>
                            <Navbar bg="none" expand="lg">
                                <Navbar.Brand href="#home">
                                    <div className="site_info_title">
                                        <p>Site Title</p>
                                    </div>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </Nav>
                                    {/* <Button variant="outline-success"><NavLink to="/contact">Contact</NavLink></Button> */}
                                    <ButtonLt><NavLink to="/contact">Contact</NavLink></ButtonLt>
                                </Navbar.Collapse>
                            </Navbar>
                        </HashRouter>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;