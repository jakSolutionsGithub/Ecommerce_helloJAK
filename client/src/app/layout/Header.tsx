import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalLoginRegister from "../../features/modal/ModalLoginRegister";
import MiniCart from "./MiniCart";
import MobileMenu from "./MobileMenu";

const Header = (props: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <>
      <div className="header-area header-area--default">
        <header className="header-area  header_height-90 header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 d-none d-md-block">
                <div className="header-left-search">
                  <form action="#" className="header-search-box">
                    <input
                      className="search-field"
                      type="text"
                      placeholder="Search Anything..."
                    />
                    <button className="search-icon">
                      <i className="icon-magnifier"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6">
                <div className="logo text-md-center">
                  <a href="index.html">
                    <img src="medias/images/logo/logo.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6">
                <div className="header-right-side text-end">
                  <div className="header-right-items  d-none d-md-block">
                    <Button variant="Light" onClick={() => setModalShow(true)}>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="icon-user"></i>
                      </a>
                    </Button>
                  </div>
                  <div className="header-right-items d-none d-md-block">
                    <Link to="/wishList" className="header-cart">
                      <i className="icon-heart"></i>
                      <span className="item-counter">3</span>
                    </Link>
                  </div>

                  <div className="header-right-items">
                    <Button variant="Light" onClick={handleShowCart}>
                      <a
                        href="#miniCart"
                        className=" header-cart minicart-btn toolbar-btn header-icon"
                      >
                        <i className="icon-bag2"></i>
                        <span className="item-counter">3</span>
                      </a>
                    </Button>
                  </div>
                  <div className="header-right-items d-block d-md-none">
                    <Link
                      to="/"
                      className="search-icon"
                      id="search-overlay-trigger"
                    >
                      <i className="icon-magnifier"></i>
                    </Link>
                  </div>
                  <div className="header-right-items">
                    <Button variant="Light" onClick={handleShow}>
                      <a
                        href="#"
                        className="mobile-navigation-icon"
                        id="mobile-menu-trigger"
                      >
                        <i className="icon-menu"></i>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Offcanvas placement="end" show={showMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <MobileMenu />
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas placement="end" show={showCart} onHide={handleCloseCart}>
        <Offcanvas.Header closeButton></Offcanvas.Header>

        <Offcanvas.Body>
          <MiniCart />
        </Offcanvas.Body>
      </Offcanvas>

      <ModalLoginRegister show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Header;
