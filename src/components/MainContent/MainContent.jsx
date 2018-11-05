import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class MainContent extends Component {
    render() {
        return (
            <div class="sidebar s1 collapsed" data-position="left" data-layout="col-3cm" data-sb-id="s1" style={{ "transform": "translateZ(0px)" }}>
                <a class="sidebar-toggle" title="Expand Sidebar" style={{ "transform": "translate(0px, 0px)" }}>
                    <i class="fas icon-sidebar-toggle"></i></a>
                <div class="sidebar-content" style={{ "transform": "translate(0px, 0px)" }}>
                    <div class="sidebar-top group">
                        <p>Follow:</p>
                        <ul class="social-links">
                            <li><a rel="nofollow" class="social-tooltip"
                                title="Follow us on Linkedin"
                                aria-label="Follow us on Linkedin"
                                href="https://www.linkedin.com/company/hindia-gate/"
                                target="_blank"><i
                                    class="fab fa-linkedin"></i></a></li>
                            <li><a rel="nofollow" class="social-tooltip"
                                title="Follow us on Twitter"
                                aria-label="Follow us on Twitter"
                                href="https://twitter.com/hindiagate"
                                target="_blank"><i
                                    class="fab fa-twitter"></i></a></li>
                            <li><a rel="nofollow" class="social-tooltip"
                                title="Follow us on Facebook"
                                aria-label="Follow us on Facebook"
                                href="https://www.facebook.com/HindiaGate/"
                                target="_blank"><i
                                    class="fab fa-facebook"></i></a></li>
                        </ul>
                    </div>
                    <div id="recent-posts-widget-with-thumbnails-11" class="widget recent-posts-widget-with-thumbnails">
                        <div id="rpwwt-recent-posts-widget-with-thumbnails-11"
                            class="rpwwt-widget">
                            <h3 class="widget-title">नई पोस्ट</h3>
                            <ul>
                                <li><a href="http://www.hindiagate.com/diwali-par-tranditioal-nahi-indo-western-dress-se-dijiye-khud-ko-new-look/"><img
                                    width="125"
                                    height="77"
                                    src="./A non political blog in hindi _ Hindia Gate_files/fusion-2-250x153.jpg"
                                    class="attachment-125x77 size-125x77 wp-post-image"
                                    alt=""
                                    srcset="http://www.hindiagate.com/wp-content/uploads/2018/11/fusion-2-250x153.jpg 250w, http://www.hindiagate.com/wp-content/uploads/2018/11/fusion-2-398x245.jpg 398w, http://www.hindiagate.com/wp-content/uploads/2018/11/fusion-2.jpg 650w"
                                    sizes="(max-width: 125px) 100vw, 125px" />
                                    <span
                                        class="rpwwt-post-title">
                                        दिवाली
                                        पर
                                        ट्रेडिशनल
                                        नहीं
                                        पहले
                                        इंडो-वेस्टर्न
                                        और खुद
                                        को
                                        दीजिए
                                        परफेक्ट
                                        लुक</span>
                                </a>
                                </li>
                                <li><a href="http://www.hindiagate.com/diwali-ke-pradushan-se-khud-ko-kaise-bacchye/"><img
                                    width="125"
                                    height="77"
                                    src="./A non political blog in hindi _ Hindia Gate_files/Crakers-250x153.jpg"
                                    class="attachment-125x77 size-125x77 wp-post-image"
                                    alt=""
                                    srcset="http://www.hindiagate.com/wp-content/uploads/2018/11/Crakers-250x153.jpg 250w, http://www.hindiagate.com/wp-content/uploads/2018/11/Crakers-400x245.jpg 400w"
                                    sizes="(max-width: 125px) 100vw, 125px" /><span
                                        class="rpwwt-post-title">दिवाली
                                        के
                                        पटाखे न
                                        पहुंचाए
                                        सेहत को
                                        नुकसान,
                                        ध्यान
                                        रखने के
                                        लिए
                                        फोलो
                                        करें ये
                                        टिप्स</span></a></li>
                                <li><a href="http://www.hindiagate.com/diwali-par-kuch-khass-ghar-hi-banaye-jaye-toh-woh-healthy-aur-tasty-hota-hai/"><img
                                    width="125"
                                    height="77"
                                    src="./A non political blog in hindi _ Hindia Gate_files/thali-250x153.jpg"
                                    class="attachment-125x77 size-125x77 wp-post-image"
                                    alt=""
                                    srcset="http://www.hindiagate.com/wp-content/uploads/2018/11/thali-250x153.jpg 250w, http://www.hindiagate.com/wp-content/uploads/2018/11/thali-398x245.jpg 398w, http://www.hindiagate.com/wp-content/uploads/2018/11/thali-400x245.jpg 400w, http://www.hindiagate.com/wp-content/uploads/2018/11/thali.jpg 650w"
                                    sizes="(max-width: 125px) 100vw, 125px" /><span
                                        class="rpwwt-post-title">दिवाली
                                        पर घर
                                        में चट
                                        से
                                        बनाइए
                                        ये खास
                                        पकवान
                                        और
                                        मेहमानों
                                        को पट
                                        से करिए
                                        खुश</span></a></li>
                                <li><a href="http://www.hindiagate.com/5-dino-ka-hota-hai-diwali-ka-tehohar-dekhiye-poori-list/"><img
                                    width="125"
                                    height="77"
                                    src="./A non political blog in hindi _ Hindia Gate_files/diwali-9-250x153.png"
                                    class="attachment-125x77 size-125x77 wp-post-image"
                                    alt=""
                                    srcset="http://www.hindiagate.com/wp-content/uploads/2018/11/diwali-9-250x153.png 250w, http://www.hindiagate.com/wp-content/uploads/2018/11/diwali-9-400x245.png 400w"
                                    sizes="(max-width: 125px) 100vw, 125px" /><span
                                        class="rpwwt-post-title">1
                                        या 2
                                        नहीं
                                        बल्कि 5
                                        दिनों
                                        तक चलता
                                        है
                                        दिवाली
                                        का
                                        त्योहार,
                                        इस दिन
                                        से होती
                                        है
                                        शुरुआत</span></a></li>
                                <li><a href="http://www.hindiagate.com/kela-aapki-neend-ko-achi-bannae-main-madad-kar-sakta-hai/"><img
                                    width="125"
                                    height="77"
                                    src="./A non political blog in hindi _ Hindia Gate_files/Kela-tea-e1541087607173-400x245.jpg"
                                    class="attachment-125x77 size-125x77 wp-post-image"
                                    alt="" /><span
                                        class="rpwwt-post-title">Bad
                                        नींद को
                                        Good
                                        बनाएगा
                                        केला,
                                        ऐसे चाय
                                        की तरह
                                        कीजिए
                                                                    यूज</span></a></li>
                            </ul>
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

MainContent = connect(mapStateToProps, mapDispatchToProps)(MainContent)
export default MainContent;