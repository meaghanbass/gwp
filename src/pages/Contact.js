import React, { Component } from "react";
import Layout from '../components/layout';
import ButtonDk from '../components/buttons/button-dk';
import ButtonLt from '../components/buttons/button-lt';
import CalloutCard from '../components/cards/callout-card';
import { NavLink } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <Layout>
                <div className="layout-wrapper" data="contact">
                    <div className="hero inner">
                        <h1>Contact us</h1>
                        <p>Get in touch and let us know how we can help.</p>
                    </div>

                    <div className="container what-we-do">
                        <h3>What We Do</h3>
                        <div className="card-wrapper">
                            <CalloutCard></CalloutCard>
                            <CalloutCard></CalloutCard>
                            <CalloutCard></CalloutCard>
                        </div>
                    </div>
                </div>
        </Layout>
        );
    }
}

export default Contact;