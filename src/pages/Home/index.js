import React from 'preact';

import Computer from 'assets/computer.png';

import Footer from 'components/Footer';

import './styles.scss';

import strings from 'strings';

class Home extends React.Component {
    render() {
        return (
            <div className="page home">
                <div className="home-fragment">
                    <div className="top-right-rect"/>
                    <img alt="computer-demo" className="computer" src={Computer}/>
                    <div className="rectangle">
                        <div className="content">
                            <h2>{strings.HOME_TITLE}</h2>
                            <p>{strings.HOME_DESCRIPTION}</p>
                            <div>
                                <a className="primary button signup" href="https://dashboard.backpulse.io/signup">{strings.GET_STARTED}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-fragment">
                    <h1>Pricing</h1>
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