import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class RightSidebar extends Component {
    render() {
        return (
            <div className="sidebar s2 collapsed" data-position="right" data-layout="col-3cm"
                data-sb-id="s2" style={{ "transform": "translateZ(0px)" }}>
                <a className="sidebar-toggle" title="Expand Sidebar" style={{ "transform": "translate(0px, 0px)" }}><i
                    className="fas icon-sidebar-toggle"></i></a>
                <div className="sidebar-content" style={{ "transform": "translate(0px, 0px)" }}>
                    <div className="sidebar-top group">
                        <p>More</p>
                    </div>
                    <div id="recent-comments-2" className="widget widget_recent_comments">
                        <h3 className="widget-title">नई टिप्पणी</h3>
                        <ul id="recentcomments">
                            <li className="recentcomments"><span className="comment-author-link">Abhishek
                                                                                                kumar</span> on <a href="http://www.hindiagate.com/weekend-ghumne-ke-liye-best-hai-landsdown/#comment-18">वीकेंड
पर मस्ती और प्राकृितक
नजारे देखने के लिए
                                                                                                बेस्ट है लैंडस्डाउन</a></li>
                            <li className="recentcomments"><span className="comment-author-link">Alok
                                                                                                barnwal</span> on <a
                                    href="http://www.hindiagate.com/office-ki-tension-ko-kaise-khatam-kiya-jaye/#comment-17">ऑफिस
                                    और आसपास के तनाव से ऐसे
                                                                                                पाएं छुटकारा</a></li>
                            <li className="recentcomments"><span className="comment-author-link">Abhishek
                                                                                                kumar</span> on <a href="http://www.hindiagate.com/office-ki-tension-ko-kaise-khatam-kiya-jaye/#comment-16">ऑफिस
और आसपास के तनाव से ऐसे
                                                                                                पाएं छुटकारा</a></li>
                            <li className="recentcomments"><span className="comment-author-link"><a
                                href="http://www.priyeshsinha.com/"
                                rel="external nofollow"
                                className="url">Stand
                                up comedian
                                                                                                        Priyesh</a></span>
                                on <a href="http://www.hindiagate.com/office-ki-tension-ko-kaise-khatam-kiya-jaye/#comment-15">ऑफिस
                                        और आसपास के तनाव से ऐसे
                                                                                                पाएं छुटकारा</a></li>
                            <li className="recentcomments"><span className="comment-author-link"><a
                                href="http://www.priyeshsinha.com/"
                                rel="external nofollow"
                                className="url">Stand
                                up comedian
                                                                                                        Priyesh</a></span>
                                on <a href="http://www.hindiagate.com/office-ki-tension-ko-kaise-khatam-kiya-jaye/#comment-14">ऑफिस
                                        और आसपास के तनाव से ऐसे
                                                                                                पाएं छुटकारा</a></li>
                        </ul>
                    </div>
                    <div id="tag_cloud-6" className="widget widget_tag_cloud">
                        <h3 className="widget-title">Tags</h3>
                        <div className="tagcloud"><a href="http://www.hindiagate.com/tag/brain/"
                            className="tag-cloud-link tag-link-42 tag-link-position-1"
                            style={{ "fontSize": "8pt" }}
                            aria-label="Brain (1 item)">Brain</a>
                            <a href="http://www.hindiagate.com/tag/delhi/"
                                className="tag-cloud-link tag-link-35 tag-link-position-2"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Delhi (1 item)">Delhi</a>
                            <a href="http://www.hindiagate.com/tag/diwali-2018/"
                                className="tag-cloud-link tag-link-99 tag-link-position-3"
                                style={{ "fontSize": "16.75pt" }}
                                aria-label="Diwali 2018 (3 items)">Diwali
                                                                                        2018</a>
                            <a href="http://www.hindiagate.com/tag/dussehra/"
                                className="tag-cloud-link tag-link-5 tag-link-position-4"
                                style={{ "fontSize": "8pt" }}
                                aria-label="dussehra (1 item)">dussehra</a>
                            <a href="http://www.hindiagate.com/tag/dussehra-2018/"
                                className="tag-cloud-link tag-link-7 tag-link-position-5"
                                style={{ "fontSize": "8pt" }}
                                aria-label="dussehra 2018 (1 item)">dussehra
                                                                                        2018</a>
                            <a href="http://www.hindiagate.com/tag/festival/"
                                className="tag-cloud-link tag-link-19 tag-link-position-6"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Festival (1 item)">Festival</a>
                            <a href="http://www.hindiagate.com/tag/festival-2018/"
                                className="tag-cloud-link tag-link-12 tag-link-position-7"
                                style={{ "fontSize": "16.75pt" }}
                                aria-label="Festival 2018 (3 items)">Festival
                                                                                        2018</a>
                            <a href="http://www.hindiagate.com/tag/food/"
                                className="tag-cloud-link tag-link-84 tag-link-position-8"
                                style={{ "fontSize": "13.25pt" }}
                                aria-label="food (2 items)">food</a>
                            <a href="http://www.hindiagate.com/tag/godess/"
                                className="tag-cloud-link tag-link-20 tag-link-position-9"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Godess (1 item)">Godess</a>
                            <a href="http://www.hindiagate.com/tag/godess-lakshmi/"
                                className="tag-cloud-link tag-link-14 tag-link-position-10"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Godess lakshmi (1 item)">Godess
                                                                                        lakshmi</a>
                            <a href="http://www.hindiagate.com/tag/health/"
                                className="tag-cloud-link tag-link-41 tag-link-position-11"
                                style={{ "fontSize": "22pt" }}
                                aria-label="Health (5 items)">Health</a>
                            <a href="http://www.hindiagate.com/tag/indian-festival/"
                                className="tag-cloud-link tag-link-27 tag-link-position-12"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Indian festival (1 item)">Indian
                                                                                        festival</a>
                            <a href="http://www.hindiagate.com/tag/karva-chauth-shubh-muhurat/"
                                className="tag-cloud-link tag-link-28 tag-link-position-13"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Karva Chauth Shubh Muhurat (1 item)">Karva
                                                                                        Chauth Shubh Muhurat</a>
                            <a href="http://www.hindiagate.com/tag/karva-chauth-vrat/"
                                className="tag-cloud-link tag-link-31 tag-link-position-14"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Karva Chauth Vrat (1 item)">Karva
                                                                                        Chauth Vrat</a>
                            <a href="http://www.hindiagate.com/tag/karwa-chauth/"
                                className="tag-cloud-link tag-link-22 tag-link-position-15"
                                style={{ "fontSize": "8pt" }}
                                aria-label="karwa chauth (1 item)">karwa
                                                                                        chauth</a>
                            <a href="http://www.hindiagate.com/tag/karwa-chauth-2018/"
                                className="tag-cloud-link tag-link-23 tag-link-position-16"
                                style={{ "fontSize": "8pt" }}
                                aria-label="karwa chauth 2018 (1 item)">karwa
                                                                                        chauth 2018</a>
                            <a href="http://www.hindiagate.com/tag/karwa-chauth-celebration/"
                                className="tag-cloud-link tag-link-29 tag-link-position-17"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Karwa Chauth Celebration (1 item)">Karwa
                                                                                        Chauth Celebration</a>
                            <a href="http://www.hindiagate.com/tag/lakshmi/"
                                className="tag-cloud-link tag-link-21 tag-link-position-18"
                                style={{ "fontSize": "8pt" }}
                                aria-label="lakshmi (1 item)">lakshmi</a>
                            <a href="http://www.hindiagate.com/tag/lansdowne/"
                                className="tag-cloud-link tag-link-32 tag-link-position-19"
                                style={{ "fontSize": "8pt" }}
                                aria-label="lansdowne (1 item)">lansdowne</a>
                            <a href="http://www.hindiagate.com/tag/lifestyle/"
                                className="tag-cloud-link tag-link-40 tag-link-position-20"
                                style={{ "fontSize": "22pt" }}
                                aria-label="Lifestyle (5 items)">Lifestyle</a>
                            <a href="http://www.hindiagate.com/tag/office/"
                                className="tag-cloud-link tag-link-39 tag-link-position-21"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Office (1 item)">Office</a>
                            <a href="http://www.hindiagate.com/tag/rajyog-muhurat/"
                                className="tag-cloud-link tag-link-30 tag-link-position-22"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Rajyog Muhurat (1 item)">Rajyog
                                                                                        Muhurat</a>
                            <a href="http://www.hindiagate.com/tag/ram/"
                                className="tag-cloud-link tag-link-9 tag-link-position-23"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Ram (1 item)">Ram</a>
                            <a href="http://www.hindiagate.com/tag/ravan/"
                                className="tag-cloud-link tag-link-8 tag-link-position-24"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Ravan (1 item)">Ravan</a>
                            <a href="http://www.hindiagate.com/tag/shami-tree/"
                                className="tag-cloud-link tag-link-6 tag-link-position-25"
                                style={{ "fontSize": "8pt" }}
                                aria-label="shami tree (1 item)">shami
                                                                                        tree</a>
                            <a href="http://www.hindiagate.com/tag/sharad-purnima/"
                                className="tag-cloud-link tag-link-13 tag-link-position-26"
                                style={{ "fontSize": "13.25pt" }}
                                aria-label="sharad purnima (2 items)">sharad
                                                                                        purnima</a>
                            <a href="http://www.hindiagate.com/tag/sita/"
                                className="tag-cloud-link tag-link-10 tag-link-position-27"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Sita (1 item)">Sita</a>
                            <a href="http://www.hindiagate.com/tag/tension/"
                                className="tag-cloud-link tag-link-38 tag-link-position-28"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Tension (1 item)">Tension</a>
                            <a href="http://www.hindiagate.com/tag/travelling/"
                                className="tag-cloud-link tag-link-34 tag-link-position-29"
                                style={{ "fontSize": "8pt" }}
                                aria-label="travelling (1 item)">travelling</a>
                            <a href="http://www.hindiagate.com/tag/uttrakhand/"
                                className="tag-cloud-link tag-link-33 tag-link-position-30"
                                style={{ "fontSize": "8pt" }}
                                aria-label="Uttrakhand (1 item)">Uttrakhand</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%89%e0%a4%a4%e0%a5%8d%e0%a4%a4%e0%a4%b0%e0%a4%be%e0%a4%96%e0%a4%a3%e0%a5%8d%e0%a4%a1/"
                                className="tag-cloud-link tag-link-36 tag-link-position-31"
                                style={{ "fontSize": "8pt" }}
                                aria-label="उत्तराखण्ड (1 item)">उत्तराखण्ड</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%95%e0%a4%b0%e0%a4%b5%e0%a4%be%e0%a4%9a%e0%a5%8c%e0%a4%a5/"
                                className="tag-cloud-link tag-link-24 tag-link-position-32"
                                style={{ "fontSize": "8pt" }}
                                aria-label="करवाचौथ (1 item)">करवाचौथ</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%95%e0%a4%b0%e0%a4%b5%e0%a4%be%e0%a4%9a%e0%a5%8c%e0%a4%a5-2018/"
                                className="tag-cloud-link tag-link-25 tag-link-position-33"
                                style={{ "fontSize": "8pt" }}
                                aria-label="करवाचौथ 2018 (1 item)">करवाचौथ
                                                                                        2018</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%96%e0%a5%80%e0%a4%b0/"
                                className="tag-cloud-link tag-link-18 tag-link-position-34"
                                style={{ "fontSize": "13.25pt" }}
                                aria-label="खीर (2 items)">खीर</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%9f%e0%a5%8d%e0%a4%b0%e0%a5%88%e0%a4%b5%e0%a4%b2%e0%a4%bf%e0%a4%82%e0%a4%97/"
                                className="tag-cloud-link tag-link-37 tag-link-position-35"
                                style={{ "fontSize": "8pt" }}
                                aria-label="ट्रैवलिंग (1 item)">ट्रैवलिंग</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%a6%e0%a4%b6%e0%a4%b9%e0%a4%b0%e0%a5%87-2018/"
                                className="tag-cloud-link tag-link-4 tag-link-position-36"
                                style={{ "fontSize": "8pt" }}
                                aria-label="दशहरे 2018 (1 item)">दशहरे
                                                                                        2018</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%a6%e0%a4%bf%e0%a4%ae%e0%a4%be%e0%a4%97/"
                                className="tag-cloud-link tag-link-43 tag-link-position-37"
                                style={{ "fontSize": "8pt" }}
                                aria-label="दिमाग (1 item)">दिमाग</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%a6%e0%a4%bf%e0%a4%b5%e0%a4%be%e0%a4%b2%e0%a5%80-2018/"
                                className="tag-cloud-link tag-link-103 tag-link-position-38"
                                style={{ "fontSize": "13.25pt" }}
                                aria-label="दिवाली 2018 (2 items)">दिवाली
                                                                                        2018</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%a7%e0%a4%a8%e0%a4%a4%e0%a5%87%e0%a4%b0%e0%a4%b8/"
                                className="tag-cloud-link tag-link-92 tag-link-position-39"
                                style={{ "fontSize": "13.25pt" }}
                                aria-label="धनतेरस (2 items)">धनतेरस</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%ad%e0%a4%be%e0%a4%b0%e0%a4%a4%e0%a5%80%e0%a4%af-%e0%a4%aa%e0%a4%b0%e0%a5%8d%e0%a4%b5/"
                                className="tag-cloud-link tag-link-16 tag-link-position-40"
                                style={{ "fontSize": "13.25pt" }}
                                aria-label="भारतीय पर्व (2 items)">भारतीय
                                                                                        पर्व</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%ae%e0%a4%be%e0%a4%82-%e0%a4%b2%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a5%8d%e0%a4%ae%e0%a5%80/"
                                className="tag-cloud-link tag-link-17 tag-link-position-41"
                                style={{ "fontSize": "16.75pt" }}
                                aria-label="मां लक्ष्मी (3 items)">मां
                                                                                        लक्ष्मी</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%b2%e0%a4%be%e0%a4%87%e0%a4%ab%e0%a4%b8%e0%a5%8d%e0%a4%9f%e0%a4%be%e0%a4%87%e0%a4%b2/"
                                className="tag-cloud-link tag-link-45 tag-link-position-42"
                                style={{ "fontSize": "13.25pt" }}
                                aria-label="लाइफस्टाइल (2 items)">लाइफस्टाइल</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%b6%e0%a4%b0%e0%a4%a6-%e0%a4%aa%e0%a5%82%e0%a4%b0%e0%a5%8d%e0%a4%a3%e0%a4%bf%e0%a4%ae%e0%a4%be/"
                                className="tag-cloud-link tag-link-15 tag-link-position-43"
                                style={{ "fontSize": "13.25pt" }}
                                aria-label="शरद पूर्णिमा (2 items)">शरद
                                                                                        पूर्णिमा</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%b8%e0%a5%81%e0%a4%97%e0%a4%be%e0%a4%b9%e0%a4%bf%e0%a4%a8/"
                                className="tag-cloud-link tag-link-26 tag-link-position-44"
                                style={{ "fontSize": "8pt" }}
                                aria-label="सुगाहिन (1 item)">सुगाहिन</a>
                            <a href="http://www.hindiagate.com/tag/%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/"
                                className="tag-cloud-link tag-link-80 tag-link-position-45"
                                style={{ "fontSize": "13.25pt" }}
                                aria-label="स्वास्थ्य (2 items)">स्वास्थ्य</a></div>
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

RightSidebar = connect(mapStateToProps, mapDispatchToProps)(RightSidebar)
export default RightSidebar;