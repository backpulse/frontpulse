import React from 'preact';

import './styles.scss';

import strings from 'strings';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar">
                    <h1 className="logo">Backpulse</h1>
                    <div className="right">
                        <a className="white button" href="https://dashboard.backpulse.io/login">{strings.LOGIN}</a>
                        <a className="primary button" href="https://dashboard.backpulse.io/signup">{strings.SIGNUP}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;