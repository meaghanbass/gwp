import React, { Component } from "react";
import Layout from './components/layout';

class Contact extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <h2>GOT QUESTIONS?</h2>
                    <p>The easiest thing to do is post on
                    our <a href="http://forum.kirupa.com">forums</a>.
                    </p>
                </div>
            </Layout>
        );
    }
}

export default Contact;