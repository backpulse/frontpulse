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
                <Footer/>
            </div>
        )
    }
}

export default Home;