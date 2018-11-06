import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <nav class="nav-container group" id="nav-footer" data-menu-id="footer-3" data-menu-scrollable="false">
                    <div class="ham__navbar-toggler collapsed" aria-expanded="false">
                        <div class="ham__navbar-span-wrapper">
                            <span class="ham-toggler-menu__span"></span>
                        </div>
                    </div>
                    <div class="ham__navbar-toggler-two collapsed" title="Menu" aria-expanded="false">
                        <div class="ham__navbar-span-wrapper">
                            <span class="line line-1"></span>
                            <span class="line line-2"></span>
                            <span class="line line-3"></span>
                        </div>
                    </div>
                    <div class="nav-text"></div>
                    <div class="nav-wrap submenu-click-expand">
                        <ul id="menu-footer-menu" class="nav container group">
                            <li id="menu-item-201" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-201"><a
                                href="http://www.hindiagate.com/about-us/">हिन्दीया गेट</a></li>
                            <li id="menu-item-278" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-278"><a
                                href="http://www.hindiagate.com/contact-us/">संपर्क
                                                    करें</a></li>
                            <li id="menu-item-274" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-274"><a
                                href="http://www.hindiagate.com/sitemap/">साइटमैप</a></li>
                        </ul>
                    </div>
                </nav>
                <section class="container" id="footer-bottom">
                    <div class="container-inner">
                        <a id="back-to-top" href="http://www.hindiagate.com/#"><i class="fas fa-angle-up"></i></a>
                        <div class="pad group">
                            <div class="grid one-half">
                                <div id="copyright">
                                    <p>हिन्दीया गेट © 2018. All Rights Reserved.</p>
                                </div>
                            </div>
                            <div class="grid one-half last">
                                <ul class="social-links">
                                    <li><a rel="nofollow" class="social-tooltip" title="Follow us on Linkedin"
                                        aria-label="Follow us on Linkedin" href="https://www.linkedin.com/company/hindia-gate/"
                                        target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a rel="nofollow" class="social-tooltip" title="Follow us on Twitter"
                                        aria-label="Follow us on Twitter" href="https://twitter.com/hindiagate"
                                        target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a rel="nofollow" class="social-tooltip" title="Follow us on Facebook"
                                        aria-label="Follow us on Facebook" href="https://www.facebook.com/HindiaGate/"
                                        target="_blank"><i class="fab fa-facebook"></i></a></li>
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