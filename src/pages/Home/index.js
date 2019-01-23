import React from 'preact';

import Rect from 'assets/rect.png';
import Computer from 'assets/computer.png';

import './styles.scss';

import strings from 'strings';

class Home extends React.Component {
    render() {
        return (
            <div className="page home">
                <div className="top-right-rect"/>
                <img className="computer" src={Computer}/>
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
        )
    }
}

export default Home;