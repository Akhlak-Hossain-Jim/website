import React, {Component} from 'react';
import icon from '../../../assets/images1/footer_logo.svg'
import whitepaper from '../../../assets/images1/whitepaper.pdf'
import Mailchimp from "./MailChimp";
import {Link} from 'react-router-dom';
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import ScrollToTop from 'react-scroll-up';
import Icon from "../../Icon";

const socialList = [
    {
        url: 'https://t.me/PersistenceOne',
        iconName: 'twitter-logo',
        tooltip:'twitter'
    },
    {
        url: 'https://t.me/PersistenceOneChat',
        iconName: 'telegram-plane',
        tooltip:'telegram'
    }, {
        url: 'https://t.me/PersistenceOne',
        iconName: 'chat',
        tooltip:'chat'
    }, {
        url: 'https://www.linkedin.com/company/persistenceone/',
        iconName: 'announcements',
        tooltip:'announcements'
    }, {
        url: 'https://t.me/PersistenceOne',
        iconName: 'discord',
        tooltip:'discord'
    }, {
        url: 'https://t.me/PersistenceOne',
        iconName: 'reddit-round',
        tooltip:'reddit'
    }, {
        url: 'https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ/featured',
        iconName: 'youtube',
        tooltip:'youtube'
    }, {
        url: 'https://medium.com/persistence-blog',
        iconName: 'medium-m',
        tooltip:'medium'
    }, {
        url: 'https://www.reddit.com/r/PersistenceOne/',
        iconName: 'linkedin-footer',
        tooltip:'linkedIn'
    },
];

class Footer extends Component {

    render() {
        return (
            <>
                <section className="contact-section">
                    <div className="container">

                    </div>
                </section>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="row m-0">
                                    <div className="col-lg-4 col-md-6 col-sm-12 margin-t-20 ">
                                        <h6>Company</h6>
                                        <div className="text-muted mt-30">
                                            <ul className="list-unstyled footer-list">
                                                <li><Link to="/team">Company</Link></li>
                                                <li><Link to="/roadmap">Roadmap</Link></li>
                                                <li><a href={whitepaper} target="_blank"
                                                       rel="noopener noreferrer">Whitepaper</a></li>
                                                <li><Link to="/roadmap">Ecosystem</Link></li>
                                                <li><Link to="/roadmap">Technology</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 margin-t-20">
                                        <h6>Products</h6>
                                        <div className="text-muted mt-30">
                                            <ul className="list-unstyled footer-list">
                                                <li><Link to="/stakedrop">Comdex</Link></li>
                                                <li><Link to="/stakedrop">Asset Mantle</Link></li>
                                                <li><Link to="/stakedrop">pStake</Link></li>
                                                <li><Link to="/stakedrop">Audit.one</Link></li>
                                                <li><Link to="/stakedrop">pLend</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 margin-t-20">
                                        <h6>Get in touch</h6>
                                        <div className="text-muted mt-30">
                                            {/*<p className="footer-text">2972 Westheimer Rd. Santa Ana, Illinois*/}
                                            {/*    85486 </p>*/}
                                            <p className="footer-text">hello@perstistence.one</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 m-0 row">
                                <div className="contact-us">
                                    <div>
                                        <div className="contact-box">
                                            <h6 className="title">Subscribe to Newsletter</h6>
                                            <div className="form-container mt-30">
                                                <p className="footer-text">Want to receive the latest updates?</p>
                                                <Mailchimp/>
                                            </div>
                                        </div>
                                        <div className="social-links-section">
                                            <h6>Follow us on</h6>
                                            <ul className="list-unstyled footer-list">
                                                {
                                                    socialList.map((item, index) => (
                                                        <OverlayTrigger
                                                            key={item.iconName}
                                                            placement="bottom"
                                                            overlay={
                                                                <Tooltip id={`tooltip-${item.iconName}}`}>
                                                                    {item.tooltip}
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <a href={item.url} rel="noopener noreferrer"
                                                               target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                     icon={item.iconName}/></a>
                                                        </OverlayTrigger>
                                                    ))
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-section">
                        <div className="footer-logo-section container ">
                            <img className="dark-logo" src={icon} alt="icon-logo" title="logo"/>
                            <p className="copy-rights mb-sm-0">{new Date().getFullYear()} © Persistence | Terms of Use.</p>
                            <div>
                                <div className="go-top">
                                    <ScrollToTop showUnder={160}>
                                        <Icon viewClass="social_icon_imgg" icon="gotop"/>
                                    </ScrollToTop>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}


export default Footer;
