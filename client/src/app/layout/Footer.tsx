import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
          <div className="footer-area-wrapper">
            <div className="footer-area section-space--ptb_120">
                <div className="container">
                    <div className="row footer-widget-wrapper">
                        <div className="col-lg-4 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">Address</h6>
                            <ul className="footer-widget__list">
                                <li><i className="icon_pin"></i> Helendo, Chicago, USA 2018</li>
                                <li> <i className="icon_phone"></i><Link to="tel:846677028028" className="hover-style-link">+846677028028</Link></li>

                            </ul>
                            <ul className="list footer-social-networks mt-25">

                                <li className="item">
                                    <Link to="https://twitter.com" target="_blank" aria-label="Twitter">
                                        <i className="social social_facebook"></i>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link to="https://facebook.com" target="_blank" aria-label="Facebook">
                                        <i className="social social_twitter"></i>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link to="https://instagram.com" target="_blank" aria-label="Instagram">
                                        <i className="social social_tumblr"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">Help & Information</h6>
                            <ul className="footer-widget__list">
                                <li><Link to="#" className="hover-style-link">Help & Contact Us</Link></li>
                                <li><Link to="#" className="hover-style-link">Returns & Refunds</Link></li>
                                <li><Link to="#" className="hover-style-link">Online Stores</Link></li>
                                <li><Link to="#" className="hover-style-link">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">About Us</h6>
                            <ul className="footer-widget__list">
                                <li><Link to="#" className="hover-style-link">About Us</Link></li>
                                <li><Link to="#" className="hover-style-link">What We Do</Link></li>
                                <li><Link to="#" className="hover-style-link">FAQ Page</Link></li>
                                <li><Link to="#" className="hover-style-link">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">Newsletter</h6>
                            <div className="footer-widget__newsletter mt-30">
                                <input type="text" placeholder="Your email address"/>
                                <button className="submit-button"><i className="icon-arrow-right"></i></button>
                            </div>
                            <ul className="footer-widget__footer-menu  section-space--mt_60 d-none d-lg-block">
                                <li><Link to="#">Term & Condition</Link></li>
                                <li><Link to="#">Policy</Link></li>
                                <li><Link to="#">Map</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-area section-space--pb_30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-5 text-center text-md-start">
                            <ul className="footer-widget__footer-menu">
                                <li><Link to="#">Term & Condition</Link></li>
                                <li><Link to="#">Policy</Link></li>
                                <li><Link to="#">Map</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-2 text-center">
                            <div className="footer-logo">
                                <Link to="#"><img src="assets/images/logo/logo.svg" alt="Logo images"/></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 order-md-3">
                            <div className="footer-bottom-social">
                                <h6 className="title">Follow Us On Social</h6>
                                <ul className="list footer-social-networks ">
                                    <li className="item">
                                        <Link to="https://twitter.com" target="_blank" aria-label="Twitter">
                                            <i className="social social_facebook"></i>
                                        </Link>
                                    </li>
                                    <li className="item">
                                        <Link to="https://facebook.com" target="_blank" aria-label="Facebook">
                                            <i className="social social_twitter"></i>
                                        </Link>
                                    </li>
                                    <li className="item">
                                        <Link to="https://instagram.com" target="_blank" aria-label="Instagram">
                                            <i className="social social_tumblr"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="copyright-text text-center  section-space--mt_40">&copy; 2022 Helendo. <Link  to="https://hasthemes.com/" target="_blank">All Rights Reserved.</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer