import React, { Component } from "react";
import Layout from '../components/layout';
import ButtonDk from '../components/buttons/button-dk';
import ButtonLt from '../components/buttons/button-lt';
import DarkSection from '../components/dark-section';
import TealGraphic from '../images/teal-graphic.svg';
import IconCard from '../components/cards/icon-card';
import { Parallax } from 'react-skrollr';
import { NavLink } from "react-router-dom";


class Home extends Component {

    render() {

        return (
            <Layout>
                <div className="layout-wrapper" data="home">
                    <div className="hero home">
                        <h1>WEB MANAGEMENT<br/>TO POWER YOUR BUSINESS.</h1>
                        <p>Optimizing multi-platform user experiences</p>
                        <div style={{flexDirection: `row`}}>
                            <ButtonLt><div style={{minWidth: `136px`}}><NavLink to="/contact">Request A Demo</NavLink></div></ButtonLt>
                            <ButtonDk><div style={{minWidth: `136px`}}><NavLink to="/contact">Sign Up</NavLink></div></ButtonDk>
                        </div>
                    </div>

                    <DarkSection>
                        <div style={{paddingBottom: `50px`, margin: `auto`}}>
                            <div className="container">
                                <h3>Beyond design</h3>
                                <p>Our team of designers and developers know what it takes to create an engaging web presence and a unique customer experience. We provide so much more than design and development, though. We provide a hands-on approach to analyzing and developing new ways to capture audience attention and drive web and social media traffic.</p>
                            </div>
                        </div>
                    </DarkSection>

                    <div className="container animated" style={{marginTop: `-100px`}}>
                    <Parallax
                        data={{
                            'data-bottom': 'transform: translateX(-102%); opacity: 0;',
                            'data-center': 'transform: translateX(0%); opacity: 1;',
                        }}
                    >
                        <img id="graphic" src={TealGraphic} style={{borderRadius: `10px`}}></img>
                    </Parallax>
                    </div>

                    <div className="container what-we-do">
                        <h3>What We Do</h3>
                        <div className="card-wrapper">
                            <IconCard>
                                <svg className="heading-icon gears" xmlns="http://www.w3.org/2000/svg">
                                    <circle fill="#B9F4BC" cx="33" cy="33" r="33"></circle>
                                    <path className="big" d="M38.4 15l1-3h1l1.2 3c.2.2.5.2.7.3l2.2-2.5 1 .4-.2 3.3c.2 0 .3.2.5.4l3-1.5.7.7-1.4 3 .5.5h3.3l.4.8-2.5 2.2c0 .2 0 .5.2.7l3 1v1l-3 1.2-.3.8 2.5 2-.4 1-3.3-.2-.4.7 1.5 2.8-.7.7-3-1.4c0 .2-.4.4-.6.5l.2 3.3-1 .4-2-2.5c-.3 0-.6 0-1 .2l-1 3h-1l-1-3c-.2-.2-.5-.2-.8-.3l-2 2.5-1-.4.2-3.3-.7-.4-2.8 1.5-.7-.7 1.4-3c-.2 0-.4-.4-.5-.6l-3.3.2-.4-1 2.5-2c0-.3 0-.6-.2-1l-3-1v-1l3-1c.2-.2.2-.4.3-.7l-2.5-2.2.4-1 3.3.2c0-.2.2-.3.4-.5l-1.5-3 .7-.7 3 1.4.5-.5v-3.3l.8-.4 2.2 2.5s.5 0 .7-.2z" fill="#6ED69A"></path>
                                    <circle fill="#B9F4BC" cx="40" cy="25" r="2"></circle>
                                    <path className="small" d="M21.6 26.8L19 25l-1.3 1 1.4 3c0 .2-.3.4-.5.6l-3-.8-1 1.4 2.4 2.3-.4.8-3.2.3-.3 1.6 3 1.4v.8l-3 1.4.4 1.6 3.2.3c0 .3.2.5.3.8l-2.4 2.3.8 1.4 3-.8.7.6-1.3 3 1.3 1 2.6-1.8c.3 0 .5.3.8.4l-.3 3.2 1.6.6 2-2.7c.2 0 .5 0 .7.2l1 3h1.5l1-3c0-.2.4-.2.7-.3l2 2.7 1.4-.6-.4-3.2c.3 0 .5-.3.8-.4L37 49l1.3-1-1.4-3c0-.2.3-.4.5-.6l3 .8 1-1.4-2.4-2.3.4-.8 3.2-.3.3-1.6-3-1.4v-.8l3-1.4-.4-1.6-3.2-.3c0-.3-.2-.5-.3-.8l2.4-2.3-.8-1.4-3 .8-.7-.6 1.3-3-1.3-1-2.6 1.8c-.3 0-.5-.3-.8-.4l.3-3.2-1.6-.6-2 2.7c-.2 0-.5 0-.7-.2l-1-3h-1.5l-1 3c0 .2-.4.2-.7.3l-2-2.7-1.4.6.4 3.2c-.3 0-.5.3-.8.4z" fill="#1BB978"></path>
                                    <circle fill="#B9F4BC" cx="28" cy="37" r="3"></circle>
                                </svg>
                                <h4>Web Design & Development</h4>
                                <p>From inception to launch we manage the entire lifcycle of design and development. <b>Includes:</b> Prototyping, SEO, A/B testing, Scalability, API integration, Module updates</p>
                                <a href="/" className="link-arrow">Learn More</a>
                            </IconCard>
                            <IconCard>
                                <svg className="hosting" xmlns="http://www.w3.org/2000/svg">
                                    <circle fill="#FFD1F1" cx="33" cy="33" r="33"></circle>
                                    <path className="bottom" fill="#ffffff" opacity="0.5" d="M11.5,40.7c-0.2-0.1-0.2-0.3-0.2-0.4c0-0.1,0-0.3,0.2-0.4l19.2-9.6c0.4-0.2,0.9-0.3,1.3-0.3 c0.4,0,0.9,0.1,1.3,0.3L52.5,40c0.2,0.1,0.2,0.3,0.2,0.4c0,0.1,0,0.3-0.2,0.4l-19.2,9.6c-0.8,0.4-1.8,0.4-2.6,0L11.5,40.7z"/>
                                    <path className="middle" fill="#f6a4eb" d="M11.5,32.8c-0.2-0.1-0.2-0.3-0.2-0.4c0-0.1,0-0.3,0.2-0.4l19.2-9.6c0.4-0.2,0.9-0.3,1.3-0.3 c0.4,0,0.9,0.1,1.3,0.3L52.5,32c0.2,0.1,0.2,0.3,0.2,0.4c0,0.1,0,0.3-0.2,0.4l-19.2,9.6c-0.8,0.4-1.8,0.4-2.6,0L11.5,32.8z"/>
                                    <path className="top" fill="#D782D9" d="M11.5,24.3c-0.2-0.1-0.2-0.3-0.2-0.4s0-0.3,0.2-0.4l19.2-9.6c0.4-0.2,0.9-0.3,1.3-0.3c0.4,0,0.9,0.1,1.3,0.3 l19.2,9.6c0.2,0.1,0.2,0.3,0.2,0.4s0,0.3-0.2,0.4l-19.2,9.6c-0.8,0.4-1.8,0.4-2.6,0L11.5,25.3z"/>
                                </svg>
                                <h4>Hosting & Management</h4>
                                <p>Whether your site was created by us or someone else, we offer industry-leading reliable and scalable hosting with 99.999999999% delivery durability.</p>
                                <a href="/" className="link-arrow">Learn More</a>
                            </IconCard>
                            <IconCard>
                                <svg className="appdev" xmlns="http://www.w3.org/2000/svg">
                                    <circle fill="#ffcca5" cx="33" cy="33" r="33"></circle>
                                    <path d="M33.7925,24.6471a14.9382,14.9382,0,0,0-1.585.528v-6.602H17.1507V41.5546h5.7339a14.9456,14.9456,0,0,0,1.2091,3.9623H18.7356a3.17,3.17,0,0,1-3.17-3.17V17.7806a3.17,3.17,0,0,1,3.17-3.17h11.887a3.17,3.17,0,0,1,3.17,3.17Z" fill="#fff"/>                                

                                    <path fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" stroke-miterlimit="10" d="M25.9,42.5c0,0-1-2.5-0.1-6.4"/>
                                    <path fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" stroke-miterlimit="10" d="M27,32.9c0,0,2.3-5.4,9-5.7"/>
                                    <path fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" stroke-miterlimit="10" d="M39.6,27.5c0,0,8.6,1.4,9.5,10.9"/>
                                    <path fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" stroke-miterlimit="10" d="M29,46.9c0,0,1.6-1.9,0.6-7.1c-0.1-0.6-0.1-1.3,0-1.9c0.5-2.3,2.5-7.8,8.7-6.8"/>
                                    <path fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" stroke-miterlimit="10" d="M41.4,32.5c0,0,6.5,2.6,3.6,15"/>
                                    <path fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" stroke-miterlimit="10" d="M32.2,49.3c0,0,1.9-2.8,1.6-6c0,0-1.1-5.9,0.3-6.5"/>
                                    <path fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" stroke-miterlimit="10" d="M36.9,35c0,0,3.8-1.2,4.6,5c0,0,0.5,6.1-1.2,10"/>
                                    <path fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2" stroke-miterlimit="10" d="M37.2,39.5c0,0,1,2.5,0.1,6.2"/>

                                    <path fill="none" stroke="#ffa27b" stroke-width="2.5" stroke-miterlimit="10"  class="st3" d="M25.9,42.5c0,0-1-2.5-0.1-6.4"/>
                                    <path fill="none" stroke="#ffa27b" stroke-width="2.5" stroke-miterlimit="10"  class="st3" d="M27,32.9c0,0,2.3-5.4,9-5.7"/>
                                    <path fill="none" stroke="#ffa27b" stroke-width="2.5" stroke-miterlimit="10"  class="st3" d="M39.6,27.5c0,0,8.6,1.4,9.5,10.9"/>
                                    <path fill="none" stroke="#ffa27b" stroke-width="2.5" stroke-miterlimit="10"  class="st3" d="M29,46.9c0,0,1.6-1.9,0.6-7.1c-0.1-0.6-0.1-1.3,0-1.9c0.5-2.3,2.5-7.8,8.7-6.8"/>
                                    <path fill="none" stroke="#ffa27b" stroke-width="2.5" stroke-miterlimit="10"  class="st3" d="M41.4,32.5c0,0,6.5,2.6,3.6,15"/>
                                    <path fill="none" stroke="#ffa27b" stroke-width="2.5" stroke-miterlimit="10"  class="st3" d="M32.2,49.3c0,0,1.9-2.8,1.6-6c0,0-1.1-5.9,0.3-6.5"/>
                                    <path fill="none" stroke="#ffa27b" stroke-width="2.5" stroke-miterlimit="10"  class="st3" d="M36.9,35c0,0,3.8-1.2,4.6,5c0,0,0.5,6.1-1.2,10"/>
                                    <path fill="none" stroke="#ffa27b" stroke-width="2.5" stroke-miterlimit="10"  class="st3" d="M37.2,39.5c0,0,1,2.5,0.1,6.2"/>
                                </svg>
                                <h4>App Development</h4>
                                <p>We can develop a customized iPhone app solution to meet your specifications and scale accordingly to satisfy user demands.</p>
                                <a href="/" className="link-arrow">Learn More</a>
                            </IconCard>
                            <IconCard>
                                <svg className="solutions">
                                    <circle fill="#C4F0FF" cx="33" cy="33" r="33"></circle>
                                    <path d="M15.7 45.3c-.7-2-.7-3.3-.7-8v-8.7c0-4.6 0-6 .7-8 .8-2.2 2.7-4 5-5 2-.6 3.3-.6 8-.6h8.7c4.6 0 6 0 8 .7 2.2.8 4 2.7 5 5 .6 2 .6 3.3.6 8v8.7c0 4.6 0 6-.7 8-.8 2.2-2.7 4-5 5-2 .6-3.3.6-8 .6h-8.7c-4.6 0-6 0-8-.7-2.2-.8-4-2.7-5-5z" fill="#68D4F8"></path>
                                    <g>
                                        <rect fill="white" x="23" y="27" width="20" height="2" rx="1"></rect>
                                        <circle className="toptoggle" fill="#217AB7" cx="27.000030214622868" cy="28" r="4"></circle>
                                    </g>
                                    <g>
                                        <rect fill="white" x="23" y="37" width="20" height="2" rx="1"></rect>
                                        <circle className="bottomtoggle" fill="#217AB7" cx="29.567531737844185" cy="38" r="4"></circle>
                                    </g>
                                </svg>
                                <h4>Solutions Architecture</h4>
                                <p>With our deep knowledge of the most reliable and dynamic technologies, we collaborate with you to propose, architect and implement functional, efficient and scalable solutions.</p>
                                <a href="/" className="link-arrow">Learn More</a>
                            </IconCard>
                        </div>
                    </div>
                </div>
            </Layout>
        );

    }
}

export default Home;