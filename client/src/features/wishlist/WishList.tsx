import WishDetail from "./WishDetail";

const WishList = () => {
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row breadcrumb_box  align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-start">
                  <h2 className="breadcrumb-title">Wishlist</h2>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-6">
                  {/* <!-- breadcrumb-list start --> */}
                  <ul className="breadcrumb-list text-center text-sm-end">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Wishlist</li>
                  </ul>
                  {/* <!-- breadcrumb-list end --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-wrapper-reveal border-bottom">
        {/* Link */}
        <div className="wishlist-main-area  section-space--ptb_90">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form action="#">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                          <th className="product-name">Product</th>
                          <th className="product-price"> Unit Price</th>
                          <th>Stock Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <WishDetail />
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- wishlist end --> */}
      </div>
    </>
  );
};

export default WishList;
