import React from 'preact';

import Computer from 'assets/computer.png';
import ScrollReveal from 'scrollreveal';

import Footer from 'components/Footer';

import './styles.scss';

import strings from 'strings';

class Home extends React.Component {

    componentDidMount() {
        const sr = ScrollReveal({
            reset: true,
            scale: 0.75,
            opacity: 1,
            duration: 1000,
        });
        sr.reveal('.reason');
        sr.reveal('.computer');
        sr.reveal('.section-title');
        sr.reveal('.price-box');
    }

    render() {
        return (
            <div className="page home">
                <div className="home-fragment">
                    <div className="top-right-rect"/>
                    <img alt="computer-demo" className="computer" src={Computer}/>
                    <div className="rectangle">
                        <div className="content">
                            <div className="content-inside">
                                <h2>{strings.WHAT_IS_BACKPULSE}</h2>
                                <p>{strings.ABOUT_DESCRIPTION}</p>
                                <div className="sign-div">
                                    <a className="primary button signup" href="https://dashboard.backpulse.io/signup">{strings.GET_STARTED}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-fragment" id="why">
                    <h1 className="tracking-in-expand section-title">{strings.WHY_BACKPULSE}</h1>
                    <div className="reasons">
                        <div className="reason">
                            <h2>{strings.REASON_SAVE_TIME}</h2>
                            <p>{strings.REASON_SAVE_TIME_DESCRIPTION}</p>
                        </div>
                        <div className="reason">
                            <h2>{strings.REASON_SITE_DESIGN}</h2>
                            <p>{strings.REASON_SITE_DESIGN_DESCRIPTION}</p>
                        </div>
                        <div className="reason">
                            <h2>{strings.REASON_SSL}</h2>
                            <p>{strings.REASON_SSL_DESCRIPTION}</p>
                        </div>
                        <div className="reason">
                            <h2>{strings.REASON_LANGUAGES}</h2>
                            <p>{strings.REASON_LANGUAGES_DESCRIPTION}</p>
                        </div>
                        <div className="reason">
                            <h2>{strings.REASON_HOSTING}</h2>
                            <p>{strings.REASON_HOSTING_DESCRIPTION}</p>
                        </div>
                        <div className="reason">
                            <h2>{strings.REASON_SIMPLE}</h2>
                            <p>{strings.REASON_SIMPLE_DESCRIPTION}</p>
                        </div>
                        <div className="reason">
                            <h2>{strings.REASON_COLLAB}</h2>
                            <p>{strings.REASON_COLLAB_DESCRIPTION}</p>
                        </div>
                        <div className="reason">
                            <h2>{strings.REASON_MODULES}</h2>
                            <p>{strings.REASON_MODULES_DESCRIPTION}</p>
                        </div>
                        <div className="reason">
                            <h2>{strings.REASON_DARK_THEME}</h2>
                            <p>{strings.REASON_DARK_THEME_DESCRIPTIONS}</p>
                        </div>
                    </div>
                </div>
                <div className="pricing-fragment" id="pricing">
                    <h1 className="tracking-in-expand section-title">Pricing</h1>
                    <div className="prices">
                        <div className="price-box">
                            <div className="title">
                                <h2>{strings.PERSONAL}</h2>
                            </div>
                            <div className="divider"/>
                            <div className="description">
                                <ul>
                                    <li>{strings.UNLIMITED_SITES}</li>
                                    <li>{strings.API_ACCESS}</li>
                                    <li>{strings.DARK_THEME}</li>
                                    <li>{strings.FREE_STORAGE}</li>
                                    <li>{strings.FREE_ACCOUNTS}</li>
                                </ul>
                            </div>
                            <div className="divider"/>
                            <div className="price">
                                <h2>0€</h2>
                                <span>{strings.PER_MONTH}</span>
                            </div>
                            <div className="bottom">
                                <a className="button primary" href="https://dashboard.backpulse.io/signup">{strings.GET_STARTED}</a>
                            </div>
                        </div>


                        <div className="price-box pro">
                            <div className="title">
                                <h2>{strings.PROFESSIONAL}</h2>
                            </div>
                            <div className="divider"/>
                            <div className="description">
                                <ul>
                                    <li>{strings.UNLIMITED_SITES}</li>
                                    <li>{strings.API_ACCESS}</li>
                                    <li>{strings.DARK_THEME}</li>
                                    <li>{strings.PAID_STORAGE}</li>
                                    <li>{strings.PAID_ACCOUNTS}</li>
                                </ul>
                            </div>
                            <div className="bottom">
                                <a className="button white" href="https://dashboard.backpulse.io/signup">{strings.GET_STARTED}</a>
                            </div>
                            <div className="divider"/>
                            <div className="price">
                                <h2>6.99€</h2>
                                <span>{strings.PER_MONTH}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;