import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Header, LeftSidebar, RightSidebar, MainContent, Footer } from '../index';

class MainContainer extends Component {
    render() {
        return (
            <div class="home blog col-3cm full-width header-desktop-sticky header-mobile-sticky unknown chrome hu-smoothscroll">
                <div id="wrapper">
                    <Header />
                    <div class="container" id="page">
                        <div class="container-inner">
                            <div class="main" >
                                <div class="main-inner group">
                                    <MainContent />
                                    <LeftSidebar />
                                    <RightSidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer)
export default MainContainer;