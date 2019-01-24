import React from 'preact';

import {Link} from 'preact-router';

import './styles.scss';

import strings from 'strings';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar">
                    <h1 className="logo">Backpulse</h1>
                    <ul>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://docs.backpulse.io">
                                {strings.MENU_DOCUMENTATION}
                            </a>
                        </li>
                        <li>
                            <Link href="/pricing">
                                {strings.MENU_PRICING}
                            </Link>
                        </li>
                        <li>
                            <Link href="/help">
                                {strings.MENU_HELP}
                            </Link>
                        </li>
                    </ul>
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