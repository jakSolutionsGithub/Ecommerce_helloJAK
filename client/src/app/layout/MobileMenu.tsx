import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'


const MobileMenu = () => {
  return (
    <>
        {/* <!--====================  mobile menu overlay ====================--> */}
    {/* <div className="mobile-menu-overlay" id="mobile-menu-overlay">
        <div className="mobile-menu-overlay__inner"> */}
            
            <div className="mobile-menu-overlay__body">
                <div className="offcanvas-menu-header d-md-block d-none">
                    <div className="helendo-language-currency row-flex row section-space--mb_60 ">
                        <div className="widget-language col-md-6">
                            <h6> Language</h6>
                            <ul>
                                <li className="actived"> <Link to="#">English</Link></li>
                                <li><Link to="#">French</Link></li>
                                <li><Link to="#">Arabric</Link></li>
                            </ul>
                        </div>
                        <div className="widget-currency col-md-6">
                            <h6> Currencies</h6>
                            <ul>
                                <li className="actived"><Link to="#">USD - US Dollar</Link></li>
                                <li><Link to="#">Euro</Link></li>
                                <li><Link to="#">Pround</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="offcanvas-navigation">
                    <ul  className="sub-menu">
                        <li className="has-children">
                            <Link to="#">Home</Link>
                            <NavDropdown className="sub-menu" title='home' menuVariant='Light' style={{color: 'darkgray'}}>
                                <NavDropdown.Item href="index.html"><span>Home V1 – Default</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-7.html"><span>Home V2 – Boxed</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-8.html"><span>Home V3 – Carousel</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-11.html"><span>Home V4 – Categories</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-10.html"><span>Home V5 – Collection</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-5.html"><span>Home V6 – Full Width</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-4.html"><span>Home V7 – Left Sidebar</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-3.html"><span>Home V8 – Metro</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-2.html"><span>Home V9 – Minimal</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-6.html"><span>Home V10 – Parallax</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-12.html"><span>Home V11 – Video Feature</span></NavDropdown.Item>
                                <NavDropdown.Item href="index-9.html"><span>Home V12 – Feature</span></NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li className="has-children">
                            <Link to="#">Shop</Link>
                            <ul className="sub-menu">
                                <li className="has-children">
                                    <Link to="#"><span>Shop Pages</span></Link>
                                    <ul className="sub-menu">
                                        <li><a href="shop-3-column.html"><span>Shop 3 Columns</span></a></li>
                                        <li><a href="shop-4-column.html"><span>Shop 4 Columns</span></a></li>
                                        <li><a href="shop-5-column.html"><span>Shop 5 Columns</span></a></li>
                                        <li><a href="shop-6-column.html"><span>Shop 6 Columns</span></a></li>
                                        <li><a href="shop-categories.html"><span>Shop Categories</span></a></li>
                                        <li><a href="shop-carousel.html"><span>Shop Carousel</span></a></li>
                                        <li><a href="shop-with-boder.html"><span>Shop With Border</span></a></li>
                                        <li><a href="shop-left-sidebar.html"><span>Shop Left Sidebar</span></a></li>
                                        <li><a href="shop-right-sidebar.html"><span>Shop Right Sidebar</span></a></li>
                                        <li><a href="shop-without-gutter.html"><span>Shop Without Gutter</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <Link to="#"><span>Product Pages</span></Link>
                                    <ul className="sub-menu">
                                        <li><a href="product-details.html"><span>Default</span></a></li>
                                        <li><a href="product-simple.html"><span>Simple</span></a></li>
                                        <li><a href="product-variable.html"><span>Variable</span></a></li>
                                        <li><a href="product-groupped.html"><span>Groupped</span></a></li>
                                        <li><a href="product-on-sale.html"><span>On Sale</span></a></li>
                                        <li><a href="product-out-of-stock.html"><span>Out Of Stock</span></a></li>
                                        <li><a href="product-affiliate.html"><span>Affiliate</span></a></li>
                                        <li><a href="product-image-swatches.html"><span>Image Swatches</span></a></li>
                                        <li><a href="product-countdown-timer.html"><span>With Countdown Timer</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <Link to="#"><span>Other Pages</span></Link>
                                    <ul className="sub-menu">
                                        <li><a href="cart.html"><span>Cart</span></a></li>
                                        <li><a href="checkout.html"><span>Checkout</span></a></li>
                                        <li><a href="my-account.html"><span>My Account</span></a></li>
                                        <li><a href="wishlist.html"><span>Wishlist</span></a></li>
                                        <li><a href="order-tracking.html"><span>Order Tracking</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <Link to="#">Pages</Link>
                            <ul className="sub-menu">
                                <li><a href="about-us.html"><span>About Us</span></a></li>
                                <li><a href="contact-us.html"><span>Contact</span></a></li>
                                <li><a href="faq.html"><span>FAQ Pages</span></a></li>
                                <li><a href="coming-soon.html"><span>Coming Soon</span></a></li>
                                <li><a href="404-page.html"><span>404 Page</span></a></li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <Link to="">Blog</Link>
                            <ul className="sub-menu">
                                <li><a href="blog-grid.html"><span>Blog Grid</span></a></li>
                                <li><a href="blog-listing.html"><span>Blog List</span></a></li>
                                <li><a href="blog-masonry.html"><span>Blog Masonry</span></a></li>
                                <li><a href="blog-left-sidebar.html"><span>Blog Sidebar</span></a></li>
                                <li><a href="single-blog-post.html"><span>Single Post V1</span></a></li>
                                <li><a href="single-blog-post-2.html"><span>Single Post V2</span></a></li>
                            </ul>
                        </li>

                    </ul>
                </nav>

                <div className="mobile-menu-contact-info section-space--mt_60">
                    <h6>Contact Us</h6>
                    <p>69 Halsey St, Ny 10002, New York, United States <br/>support.center@unero.co <br/>(0091) 8547 632521</p>
                </div>

                <div className="mobile-menu-social-share section-space--mt_60">
                    <h6>Follow US On Socials</h6>
                    <ul className="social-share">
                        <li><Link to="#"><i className="social social_facebook"></i></Link></li>
                        <li><Link to="#"><i className="social social_twitter"></i></Link></li>
                        <li><Link to="#"><i className="social social_googleplus"></i></Link></li>
                        <li><Link to="#"><i className="social social_linkedin"></i></Link></li>
                        <li><Link to="#"><i className="social social_pinterest"></i></Link></li>
                    </ul>
                </div>


            </div>


        {/* </div>


    </div> */}
    {/* <!--====================  End of mobile menu overlay  ====================-->*/}
    
    </>
  )
}

export default MobileMenu