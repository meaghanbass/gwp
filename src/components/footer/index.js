import React from 'react';
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';

class Footer extends React.Component {
    render(){
        return (
            <React.Fragment>
                <footer>
                    <div className="grid-container">
                        <div className="top">
                            <div className="site_info_title">
                                <p>Site Title</p>
                            </div>
                            <div className="link-sections">
                                <div className="ls_1">
                                    {/* <h3>Community</h3> */}
                                    <ul>
                                        <h3>Community</h3>
                                        <li><a href="/">About</a></li>
                                        <li><a href="/">Submit an issue</a></li>
                                        <li><a href="/">GitHub Repo</a></li>
                                        <li><a href="/">Slack</a></li>
                                    </ul>
                                </div>
                                <div className="ls_2">
                                    {/* <h3>Getting Started</h3> */}
                                    <ul>
                                        <h3>Getting Started</h3>
                                        <li><a href="/">Introduction</a></li>
                                        <li><a href="/">Documentation</a></li>
                                        <li><a href="/">Usage</a></li>
                                        <li><a href="/">Globals</a></li>
                                        <li><a href="/">Elements</a></li>
                                        <li><a href="/">Collections</a></li>
                                        <li><a href="/">Themes</a></li>
                                    </ul>
                                </div>
                                <div className="ls_3">
                                    <form>
                                        <h3>Subscribe for Updates</h3>
                                        <div>
                                            <label className="form-label" for="fname">Name</label>
                                            <input id="fname" class="required" type="text" name="fname" aria-required="true"></input>
                                        </div>
                                        <div>
                                            <label className="form-label" for="email">Email</label>
                                            <input id="email" class="required" type="email" name="email" aria-required="true"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <p>&copy; 2020 flow-ui. All rights reserved.</p>
                            </div>
                            <div className="center">
                                <ul>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Sitemap</a></li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li><img src={twitter} width="20px" height="20px"></img></li>
                                    <li><img src={facebook} width="20px" height="20px"></img></li>
                                    <li><img src={linkedin} width="20px" height="20px"></img></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;