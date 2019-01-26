import React from 'preact';

import {Link} from 'preact-router';

import './styles.scss';

import Logo from 'assets/logo.png';

import strings from 'strings';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }

    toggleMenu = () => this.setState({
        menu: !this.state.menu
    });

    render() {
        return (
            <div className="navbar-container">
                {this.state.menu && <div className="mobile-menu">
                    <ul>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://docs.backpulse.io">
                                {strings.MENU_DOCUMENTATION}
                            </a>
                        </li>
                        <li>
                            <Link onClick={this.toggleMenu} href="/pricing">
                                {strings.MENU_PRICING}
                            </Link>
                        </li>
                        <li>
                            <Link onClick={this.toggleMenu} href="/help">
                                {strings.MENU_HELP}
                            </Link>
                        </li>
                        <li>
                            <a className="white button" href="https://dashboard.backpulse.io/login">{strings.LOGIN}</a>
                        </li>
                        <li>
                            <a className="primary button" href="https://dashboard.backpulse.io/signup">{strings.SIGNUP}</a>
                        </li>
                    </ul>
                </div>}
                <div className="navbar">
                    <img src={Logo}/>
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
                        <a onClick={this.toggleMenu} href="#menu" className="primary button menu-button">Menu</a>
                        <a className="white button" href="https://dashboard.backpulse.io/login">{strings.LOGIN}</a>
                        <a className="primary button" href="https://dashboard.backpulse.io/signup">{strings.SIGNUP}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;