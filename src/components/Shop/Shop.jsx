import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Header, LeftSidebar, RightSidebar, MainContent } from '../index';

class Shop extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

Shop = connect(mapStateToProps, mapDispatchToProps)(Shop)
export default Shop;