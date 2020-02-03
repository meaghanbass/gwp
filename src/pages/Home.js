import React, { Component } from "react";
import Layout from '../components/layout';
import ButtonDk from '../components/buttons/button-dk';
import ButtonLt from '../components/buttons/button-lt';
import DarkSection from '../components/dark-section';
import TealGraphic from '../images/teal-graphic.svg';
import IconCard from '../components/cards/icon-card';
import DevIcon from '../images/developer.svg';
import { Parallax } from 'react-skrollr';

class Home extends Component {

    render() {

        return (
            <Layout>
                <div className="bg">
                    <h1>WEB MANAGEMENT<br/>TO POWER YOUR BUSINESS.</h1>
                    <p>Optimizing multi-platform user experiences</p>
                    <div style={{flexDirection: `row`}}>
                        <ButtonLt>Request a Demo</ButtonLt>
                        <ButtonDk>Sign Up</ButtonDk>
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
                            <img src={DevIcon} height="66px" width="66px"></img>
                            <div className="">
                                
                            </div>
                            <h4>Web Design & Development</h4>
                            <p>From inception to launch we manage the entire lifcycle of design and development. <b>Includes:</b> Prototyping, SEO, A/B testing, Scalability, API integration, Module updates</p>
                        </IconCard>
                        <IconCard>
                            <h4>Hosting & Management</h4>
                            <p>Whether your site was created by us or someone else, we offer industry-leading reliable and scalable hosting with 99.999999999% delivery durability.</p>
                        </IconCard>
                        <IconCard>
                            <h4>App Development</h4>
                            <p>We can develop a customized iPhone app solution to meet your specifications and scale accordingly to satisfy user demands.</p>
                        </IconCard>
                        <IconCard>
                            <h4>Solutions Architecture</h4>
                            <p>With our deep knowledge of the most reliable and dynamic technologies, we collaborate with you to propose, architect and implement functional, efficient and scalable solutions.</p>
                        </IconCard>
                    </div>
                </div>
            </Layout>
        );

    }
}

export default Home;