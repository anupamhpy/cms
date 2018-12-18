import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class Header extends Component {
    render() {
        return (
            <div>
                <header id="header" className="main-menu-mobile-on one-mobile-menu main_menu header-ads-desktop  topbar-transparent no-header-img">
                    <nav className="nav-container group mobile-menu mobile-sticky " id="nav-mobile" data-menu-id="header-1">
                        <div className="mobile-title-logo-in-header">
                            <p className="site-title"><a className="custom-logo-link" href="http://www.hindiagate.com/" rel="home" title="हिन्दीया गेट | Home page">हिन्दीया गेट</a></p>
                        </div>
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
                        <div className="nav-wrap container submenu-click-expand">
                            <ul className="nav container-inner group mobile-search">
                                <li>
                                    <form method="get" className="searchform themeform" action="http://www.hindiagate.com/">
                                        <div>
                                            <input type="text" className="search" name="s" onBlur="if(this.value==&#39;&#39;)this.value=&#39;To search type and hit enter&#39;;" onFocus="if(this.value==&#39;To search type and hit enter&#39;)this.value=&#39;&#39;;" value="To search type and hit enter" />
                                        </div>
                                    </form>
                                </li>
                            </ul>
                            <ul id="menu-top-menu" className="nav container-inner group"><li id="menu-item-126" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-126"><a href="http://www.hindiagate.com/tourism/">पर्यटन</a></li>
                                <li id="menu-item-133" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-133"><a href="http://www.hindiagate.com/life-style/">जीवन शैली</a></li>
                                <li id="menu-item-52" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-52"><a href="http://www.hindiagate.com/dharm/">धर्म</a></li>
                                <li id="menu-item-229" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-229"><a href="http://www.hindiagate.com/health/">सेहत</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container group">
                        <div className="container-inner">
                            <div className="group pad central-header-zone">
                                <div className="logo-tagline-group">
                                    <p className="site-title"><a className="custom-logo-link" href="http://www.hindiagate.com/" rel="home" title="हिन्दीया गेट | Home page">हिन्दीया गेट</a></p>
                                    <p className="site-description">हिन्दी का एक अपना मंच</p>
                                </div>
                                <div id="header-widgets">
                                </div>
                            </div>
                            <nav className="nav-container group desktop-menu " id="nav-header" data-menu-id="header-2">
                                <div className="nav-text"></div>
                                <div className="nav-wrap container">
                                    <ul id="menu-top-menu-1" className="nav container-inner group">
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-126"><a href="http://www.hindiagate.com/tourism/">पर्यटन</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-133"><a href="http://www.hindiagate.com/life-style/">जीवन शैली</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-52"><a href="http://www.hindiagate.com/dharm/">धर्म</a></li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-229"><a href="http://www.hindiagate.com/health/">सेहत</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

Header = connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header;