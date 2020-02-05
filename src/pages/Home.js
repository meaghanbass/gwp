import React, { Component } from "react";
import Layout from '../components/layout';
import ButtonDk from '../components/buttons/button-dk';
import ButtonLt from '../components/buttons/button-lt';
import DarkSection from '../components/dark-section';
import TealGraphic from '../images/teal-graphic.svg';
import IconCard from '../components/cards/icon-card';
import { Parallax } from 'react-skrollr';

class Home extends Component {

    render() {

        return (
            <Layout>
                {/* <div className="testbg"></div> */}
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
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <circle fill="#87BBFD" cx="33" cy="33" r="33"></circle>
                                <path fill="#e6ebf1" d="M11.5,40.7c-0.2-0.1-0.2-0.3-0.2-0.4c0-0.1,0-0.3,0.2-0.4l19.2-9.6c0.4-0.2,0.9-0.3,1.3-0.3 c0.4,0,0.9,0.1,1.3,0.3L52.5,40c0.2,0.1,0.2,0.3,0.2,0.4c0,0.1,0,0.3-0.2,0.4l-19.2,9.6c-0.8,0.4-1.8,0.4-2.6,0L11.5,40.7z"/>
                                <path fill="#6772e5" d="M11.5,32.8c-0.2-0.1-0.2-0.3-0.2-0.4c0-0.1,0-0.3,0.2-0.4l19.2-9.6c0.4-0.2,0.9-0.3,1.3-0.3 c0.4,0,0.9,0.1,1.3,0.3L52.5,32c0.2,0.1,0.2,0.3,0.2,0.4c0,0.1,0,0.3-0.2,0.4l-19.2,9.6c-0.8,0.4-1.8,0.4-2.6,0L11.5,32.8z"/>
                                <path fill="#32325d" d="M11.5,25.3c-0.2-0.1-0.2-0.3-0.2-0.4s0-0.3,0.2-0.4l19.2-9.6c0.4-0.2,0.9-0.3,1.3-0.3c0.4,0,0.9,0.1,1.3,0.3 l19.2,9.6c0.2,0.1,0.2,0.3,0.2,0.4s0,0.3-0.2,0.4l-19.2,9.6c-0.8,0.4-1.8,0.4-2.6,0L11.5,25.3z"/>
                            </svg>
                            <h4>Hosting & Management</h4>
                            <p>Whether your site was created by us or someone else, we offer industry-leading reliable and scalable hosting with 99.999999999% delivery durability.</p>
                            <a href="/" className="link-arrow">Learn More</a>
                        </IconCard>
                        <IconCard>
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <circle fill="#ffcca5" cx="33" cy="33" r="33"></circle>
                                <path d="M33.7925,24.6471a14.9382,14.9382,0,0,0-1.585.528v-6.602H17.1507V41.5546h5.7339a14.9456,14.9456,0,0,0,1.2091,3.9623H18.7356a3.17,3.17,0,0,1-3.17-3.17V17.7806a3.17,3.17,0,0,1,3.17-3.17h11.887a3.17,3.17,0,0,1,3.17,3.17Z" fill="#fff"/>
                                <path d="M29.8554,48.43l-1.5242-1a7.71,7.71,0,0,0,1.12-4.2257,14.0053,14.0053,0,0,1-.1322-1.6064l-.0045-.1138a10.2075,10.2075,0,0,0-.26-1.9742c-.3042-1.4293.5992-4.1691,2.1416-6.1167a7.7207,7.7207,0,0,1,8.5944-2.7679l-.4968,1.7362A5.8908,5.8908,0,0,0,32.64,34.5032c-1.2383,1.5635-1.9731,3.7919-1.7932,4.6371a11.9487,11.9487,0,0,1,.2973,2.2727l.0045.1171a12.369,12.369,0,0,0,.117,1.4324A9.3453,9.3453,0,0,1,29.8554,48.43ZM40.709,32.9911l.9342-1.5515c4.9365,2.8838,6.5386,7.7922,4.6015,17.3189l-1.7956-.3542C46.2462,39.566,44.8991,35.4388,40.709,32.9911ZM33.16,50.7054,31.5584,49.83A11.9115,11.9115,0,0,0,33.34,43.2339c-.0309-.4032-.073-.7591-.1657-1.45-.4463-3.3257-.2827-4.6992,1.4546-6.1168l1.1682,1.3891c-1.0676.8712-1.1736,1.7616-.8073,4.4913.097.7227.1421,1.1034.1763,1.55A13.5981,13.5981,0,0,1,33.16,50.7054ZM25.7437,35.2505l1.7393.5645a11.29,11.29,0,0,0,.0941,7.394l-1.7241.6079a13.0671,13.0671,0,0,1-.1093-8.5664Zm11.4892-8.743-.02,1.8038c-.1356-.0017-.1356-.0017-.2534-.0038-.3132-.0055-.3735-.006-.3815-.0052-4.2835.4325-6.9464,2.3982-8.5269,5.958l-1.6778-.7228c1.8415-4.1477,5.0685-6.53,10.018-7.03a3.8577,3.8577,0,0,1,.6012-.0039C37.1053,26.5059,37.1053,26.5059,37.2329,26.5075ZM50.4342,39.4231H48.603a10.975,10.975,0,0,0-9.5018-10.9574l.2311-1.7895A12.7876,12.7876,0,0,1,50.4342,39.4231ZM37.1365,36.2753l-1.0147-1.5016a.6338.6338,0,0,0-.0839.067,1.0279,1.0279,0,0,1,.2759-.2094A4.2845,4.2845,0,0,1,37.69,34.33c3.032-.4676,5.6764,2.8,5.2172,9.0053-.1534,2.0729-.333,3.6721-.537,4.8745a10.78,10.78,0,0,1-.5975,2.3221,3.6752,3.6752,0,0,1-.3022.5778c-.0542.084-.1756.2549-.1812.2634q-.0059.0095-1.6171-.8479c.0376-.066.0376-.066.0733-.1223a4.7633,4.7633,0,0,0,.8185-2.49c.1936-1.141.3672-2.687.5168-4.7083.2184-2.9514-.2582-4.95-1.1915-6.1034a2.2853,2.2853,0,0,0-1.916-.9885c-.4207.0649-.6868.1114-.7725.1178C37.1811,36.2451,37.16,36.26,37.1365,36.2753Zm-.2132,15.5813-1.6178-.8452a12.9587,12.9587,0,0,0,.8895-2.0432h1.8313A8.9791,8.9791,0,0,1,36.9233,51.8566Zm1.682-4.9113-1.7885-.3879a13.7611,13.7611,0,0,0-.1749-7.46l1.7609-.4953A15.5009,15.5009,0,0,1,38.6053,46.9453Z" fill="#ffa27b"/>
                            </svg>
                            <h4>App Development</h4>
                            <p>We can develop a customized iPhone app solution to meet your specifications and scale accordingly to satisfy user demands.</p>
                            <a href="/" className="link-arrow">Learn More</a>
                        </IconCard>
                        <IconCard>
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <circle fill="#ffd1f1" cx="33" cy="33" r="33"></circle>
                                <path d="M35.5079,51.0614A2.5434,2.5434,0,0,1,33.38,51.06L17.4223,43.6827a2.542,2.542,0,0,1-1.4745-2.3079V21.824a2.5428,2.5428,0,0,1,.4459-1.4319l18.05,8.34L52.4946,20.394Z" fill="#9251ac"/>
                                <path d="M44.36,46.97l-8.848,4.0916a2.537,2.537,0,0,1-1.0638.2331V28.7338l18.0505-8.3417a2.5359,2.5359,0,0,1,.4458,1.4319V40.9705l-8.2509-2.75a1.9271,1.9271,0,0,0-2.4376,2.4376Z" fill="#f6a4eb"/>
                                <path d="M35.0645,24.2463c-2.0432,0-3.7-.8284-3.7-1.85V21.163h.0946c.3753.8234,1.8459,1.4389,3.6054,1.4389s3.23-.6155,3.6055-1.4389h.0945v1.2333C38.7645,23.4179,37.1077,24.2463,35.0645,24.2463Zm9.25-3.0833c-2.0432,0-3.7-.8284-3.7-1.85V18.08h.0946c.3753.8235,1.8459,1.4389,3.6054,1.4389s3.23-.6154,3.6055-1.4389h.0945V19.313C48.0145,20.3346,46.3577,21.163,44.3145,21.163Zm-18.5.7708c-2.0432,0-3.7-.8284-3.7-1.85V18.8505h.0946c.3753.8234,1.8459,1.4389,3.6054,1.4389s3.2305-.6155,3.6055-1.4389h.0945v1.2333C29.5145,21.1054,27.8577,21.9338,25.8145,21.9338Zm9.25-3.8542c-2.0432,0-3.7-.8283-3.7-1.85V14.9963h.0946c.3753.8235,1.8459,1.4389,3.6054,1.4389s3.23-.6154,3.6055-1.4389h.0945V16.23C38.7645,17.2513,37.1077,18.08,35.0645,18.08Z" fill="#9251ac"/>
                                <path d="M49.9536,44.6214l3.89,3.89a.3557.3557,0,0,1,0,.5032l-.8774.8774a.3558.3558,0,0,1-.5031,0l-3.89-3.89L47.24,48.4013a.3558.3558,0,0,1-.6485-.06l-2.6255-7.8765a.3558.3558,0,0,1,.45-.45L52.2926,42.64a.3557.3557,0,0,1,.06.6485Z" fill="#9251ac"/>
                            </svg>
                            <h4>Solutions Architecture</h4>
                            <p>With our deep knowledge of the most reliable and dynamic technologies, we collaborate with you to propose, architect and implement functional, efficient and scalable solutions.</p>
                            <a href="/" className="link-arrow">Learn More</a>
                        </IconCard>
                    </div>
                </div>
            </Layout>
        );

    }
}

export default Home;