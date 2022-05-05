import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props: any) => {
  return (
   <>
    <div className="header-area header-area--default">

        
        <header className="header-area  header_height-90 header-sticky">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4 d-none d-md-block">
                        <div className="header-left-search">
                            <form action="#" className="header-search-box">
                                <input className="search-field" type="text" placeholder="Search Anything..."/>
                                <button className="search-icon"><i className="icon-magnifier"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6">
                        <div className="logo text-md-center">
                            <a href="index.html"><img src="medias/images/logo/logo.svg" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6">
                        <div className="header-right-side text-end">
                            <div className="header-right-items  d-none d-md-block">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    
                                    <i className="icon-user"></i>
                                </Link>
                            </div>
                            <div className="header-right-items d-none d-md-block">
                                <a href="wishlist.html" className="header-cart">
                                    <i className="icon-heart"></i>
                                    <span className="item-counter">3</span>
                                </a>
                            </div>

                            <div className="header-right-items">
                                <a href="#miniCart" className=" header-cart minicart-btn toolbar-btn header-icon">
                                    <i className="icon-bag2"></i>
                                    <span className="item-counter">3</span>
                                </a>
                            </div>
                            <div className="header-right-items d-block d-md-none">
                                <Link to="/" className="search-icon" id="search-overlay-trigger">
                                    <i className="icon-magnifier"></i>
                                </Link>
                            </div>
                            <div className="header-right-items">
                                <Link to="#" className="mobile-navigation-icon" id="mobile-menu-trigger">
                                    <i className="icon-menu"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
       

    </div>


<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="row breadcrumb_box  align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-start">
                        <h2 className="breadcrumb-title">Shop</h2>
                    </div>
                    <div className="col-lg-6  col-md-6 col-sm-6">
                        
                        <ul className="breadcrumb-list text-center text-sm-end">
                            <li className="breadcrumb-item"><Link to="/catalog">Home</Link></li>
                            <li className="breadcrumb-item active">Shop</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</> 
   )

}

export default Header