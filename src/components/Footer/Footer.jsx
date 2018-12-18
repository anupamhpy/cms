import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <nav className="nav-container group" id="nav-footer" data-menu-id="footer-3" data-menu-scrollable="false">
                    <div className="ham__navbar-toggler collapsed" aria-expanded="false">
                        <div className="ham__navbar-span-wrapper">
                            <span className="ham-toggler-menu__span"></span>
                        </div>
                    </div>
                    <div className="ham__navbar-toggler-two collapsed" title="Menu" aria-expanded="false">
                        <div className="ham__navbar-span-wrapper">
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                        </div>
                    </div>
                    <div className="nav-text"></div>
                    <div className="nav-wrap submenu-click-expand">
                        <ul id="menu-footer-menu" className="nav container group">
                            <li id="menu-item-201" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-201"><a
                                href="http://www.hindiagate.com/about-us/">हिन्दीया गेट</a></li>
                            <li id="menu-item-278" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-278"><a
                                href="http://www.hindiagate.com/contact-us/">संपर्क
                                                    करें</a></li>
                            <li id="menu-item-274" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-274"><a
                                href="http://www.hindiagate.com/sitemap/">साइटमैप</a></li>
                        </ul>
                    </div>
                </nav>
                <section className="container" id="footer-bottom">
                    <div className="container-inner">
                        <a id="back-to-top" href="http://www.hindiagate.com/#"><i className="fas fa-angle-up"></i></a>
                        <div className="pad group">
                            <div className="grid one-half">
                                <div id="copyright">
                                    <p>हिन्दीया गेट © 2018. All Rights Reserved.</p>
                                </div>
                            </div>
                            <div className="grid one-half last">
                                <ul className="social-links">
                                    <li><a rel="nofollow" className="social-tooltip" title="Follow us on Linkedin"
                                        aria-label="Follow us on Linkedin" href="https://www.linkedin.com/company/hindia-gate/"
                                        target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                    <li><a rel="nofollow" className="social-tooltip" title="Follow us on Twitter"
                                        aria-label="Follow us on Twitter" href="https://twitter.com/hindiagate"
                                        target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a rel="nofollow" className="social-tooltip" title="Follow us on Facebook"
                                        aria-label="Follow us on Facebook" href="https://www.facebook.com/HindiaGate/"
                                        target="_blank"><i className="fab fa-facebook"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

Footer = connect(mapStateToProps, mapDispatchToProps)(Footer)
export default Footer;