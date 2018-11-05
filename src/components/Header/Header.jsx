import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class Header extends Component {
    render() {
        return (
            <div>
                <header id="header" class="main-menu-mobile-on one-mobile-menu main_menu header-ads-desktop  topbar-transparent no-header-img">
                    <nav class="nav-container group mobile-menu mobile-sticky " id="nav-mobile" data-menu-id="header-1">
                        <div class="mobile-title-logo-in-header">
                            <p class="site-title"><a class="custom-logo-link" href="http://www.hindiagate.com/" rel="home" title="हिन्दीया गेट | Home page">हिन्दीया गेट</a></p>
                        </div>
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
                        <div class="nav-wrap container submenu-click-expand">
                            <ul class="nav container-inner group mobile-search">
                                <li>
                                    <form method="get" class="searchform themeform" action="http://www.hindiagate.com/">
                                        <div>
                                            <input type="text" class="search" name="s" onblur="if(this.value==&#39;&#39;)this.value=&#39;To search type and hit enter&#39;;" onfocus="if(this.value==&#39;To search type and hit enter&#39;)this.value=&#39;&#39;;" value="To search type and hit enter" />
                                        </div>
                                    </form>
                                </li>
                            </ul>
                            <ul id="menu-top-menu" class="nav container-inner group"><li id="menu-item-126" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-126"><a href="http://www.hindiagate.com/tourism/">पर्यटन</a></li>
                                <li id="menu-item-133" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-133"><a href="http://www.hindiagate.com/life-style/">जीवन शैली</a></li>
                                <li id="menu-item-52" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-52"><a href="http://www.hindiagate.com/dharm/">धर्म</a></li>
                                <li id="menu-item-229" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-229"><a href="http://www.hindiagate.com/health/">सेहत</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class="container group">
                        <div class="container-inner">
                            <div class="group pad central-header-zone">
                                <div class="logo-tagline-group">
                                    <p class="site-title"><a class="custom-logo-link" href="http://www.hindiagate.com/" rel="home" title="हिन्दीया गेट | Home page">हिन्दीया गेट</a></p>
                                    <p class="site-description">हिन्दी का एक अपना मंच</p>
                                </div>
                                <div id="header-widgets">
                                </div>
                            </div>
                            <nav class="nav-container group desktop-menu " id="nav-header" data-menu-id="header-2">
                                <div class="nav-text"></div>
                                <div class="nav-wrap container">
                                    <ul id="menu-top-menu-1" class="nav container-inner group">
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-126"><a href="http://www.hindiagate.com/tourism/">पर्यटन</a></li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-133"><a href="http://www.hindiagate.com/life-style/">जीवन शैली</a></li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-52"><a href="http://www.hindiagate.com/dharm/">धर्म</a></li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-229"><a href="http://www.hindiagate.com/health/">सेहत</a></li>
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