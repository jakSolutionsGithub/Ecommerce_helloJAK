import React from "react";

const MiniCart = () => {
  return (
    <>
      {/* <div className="offcanvas-minicart_wrapper" > */}
        <div className="offcanvas-menu-inner">
        
          <div className="minicart-content">
            <ul className="minicart-list">
              <li className="minicart-product">
                <a className="product-item_remove" href="/">
                  <i className="icon-cross2"></i>
                </a>
                <a className="product-item_img" href="/">
                  <img
                    className="img-fluid"
                    src="/medias/images/product/small/cart-01.webp"
                    alt="Product"
                  />
                </a>
                <div className="product-item_content">
                  <a className="product-item_title" href="product-details.html">
                    Plant pots
                  </a>
                  <label>
                    Qty : <span>1</span>
                  </label>
                  <label className="product-item_quantity">
                    Price: <span> $20.00</span>
                  </label>
                </div>
              </li>
              <li className="minicart-product">
                <a className="product-item_remove" href="/">
                  <i className="icon-cross2"></i>
                </a>
                <a className="product-item_img" href="/">
                  <img
                    className="img-fluid"
                    src="/medias/images/product/small/cart-02.webp"
                    alt="Product"
                  />
                </a>
                <div className="product-item_content">
                  <a className="product-item_title" href="product-details.html">
                    Teapot with black tea
                  </a>
                  <label>
                    Qty : <span>1</span>
                  </label>
                  <label className="product-item_quantity">
                    Price: <span> $20.00</span>
                  </label>
                </div>
              </li>
              <li className="minicart-product">
                <a className="product-item_remove" href="/">
                  <i className="icon-cross2"></i>
                </a>
                <a className="product-item_img" href="/">
                  <img
                    className="img-fluid"
                    src="/medias/images/product/small/cart-03.webp"
                    alt="Product"
                  />
                </a>
                <div className="product-item_content">
                  <a className="product-item_title" href="product-details.html">
                    Simple Chair
                  </a>
                  <label>
                    Qty : <span>1</span>
                  </label>
                  <label className="product-item_quantity">
                    Price: <span> $20.00</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="minicart-item_total">
            <span className="font-weight--reguler">Subtotal:</span>
            <span className="ammount font-weight--reguler">$60.00</span>
          </div>
          <div className="minicart-btn_area">
            <a href="cart.html" className="btn btn--full btn--border_1">
              View cart
            </a>
          </div>
          <div className="minicart-btn_area">
            <a href="checkout.html" className="btn btn--full btn--black">
              Checkout
            </a>
          </div>
        </div>

        <div className="global-overlay"></div>
      {/* // </div> */}
    </>
  );
};

export default MiniCart;
