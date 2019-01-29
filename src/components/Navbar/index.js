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
                            <a onClick={this.toggleMenu} href="#features">
                                {strings.FEATURES}
                            </a>
                        </li>
                        <li>
                            <a onClick={this.toggleMenu} href="#pricing">
                                {strings.MENU_PRICING}
                            </a>
                        </li>
                        <li>
                            <a onClick={this.toggleMenu} href="mailto:contact@backpulse.io">
                                {strings.MENU_HELP}
                            </a>
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
                    <Link className="logo-container" href="/">
                        <img src={Logo}/>
                        <h1 className="logo tracking-in-expand">Backpulse</h1>
                    </Link>
                    <ul>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://docs.backpulse.io">
                                {strings.MENU_DOCUMENTATION}
                            </a>
                        </li>
                        <li>
                            <a href="#features">
                                {strings.FEATURES}
                            </a>
                        </li>
                        <li>
                            <a href="#pricing">
                                {strings.MENU_PRICING}
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contact@backpulse.io">
                                {strings.MENU_HELP}
                            </a>
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