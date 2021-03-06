import React from 'preact';

import './styles.scss';

import strings from 'strings';

import {Link} from 'preact-router';

import Logo from 'assets/logo.png';

import GitHubIcon from 'assets/icons/github.svg';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-container">
                    <img className="logo" src={Logo}/>
                    <h1 className="logo">Backpulse</h1>
                    <div className="navigation">
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="https://docs.backpulse.io" target="_blank">{strings.MENU_DOCUMENTATION}</a>
                            </li>
                            <li>
                                <a href="#features">{strings.FOOTER_FEATURES}</a>
                            </li>
                            <li>
                                <a href="#pricing">{strings.FOOTER_PRICING}</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="https://dashboard.backpulse.io/login">
                                    {strings.LOGIN}
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="https://dashboard.backpulse.io/signup">
                                    {strings.FOOTER_REGISTER}
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="mailto:contact@backpulse.io">
                                    {strings.FOOTER_CONTACT}
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link href="/about">
                                    {strings.FOOTER_ABOUT}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms">
                                    {strings.FOOTER_TERMS}
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    {strings.FOOTER_PRIVACY}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <a rel="noopener noreferrer" className="icon" target="_blank" href="https://github.com/backpulse">
                            <img alt="github" src={GitHubIcon}/>
                        </a>

                        <span className="copyright">
                            Copyright © {new Date().getFullYear()}, Backpulse 
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;