import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Header, LeftSidebar, RightSidebar, MainContent, Footer } from '../index';
import { Link } from 'react-router-dom'

class MainContainer extends Component {
    render() {
        return (
            <div className="home blog col-3cm full-width header-desktop-sticky header-mobile-sticky unknown chrome hu-smoothscroll">
                <div id="wrapper">
                    <Header />
                    <div className="container" id="page">
                        <div className="container-inner">
                            <div className="main" >
                                <div className="main-inner group">
                                    <MainContent />
                                    <LeftSidebar />
                                    <RightSidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                <div onClick={()=>this.props.history.push('main')}>Main</div>
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