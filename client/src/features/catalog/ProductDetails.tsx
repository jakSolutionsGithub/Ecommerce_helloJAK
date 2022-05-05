import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingComponent from '../../app/layout/LoadingComponent'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore'
import { fetchProductAsync, productSelectors } from './catalogSlice'

const ProductDetails = () => {

    const {id} = useParams<{id: string}>();
    const product = useAppSelector(state => productSelectors.selectById(state, id!));
    const dispatch = useAppDispatch();
    const {status : productStatus} = useAppSelector(state => state.catalog);
    

    useEffect(()=>{
        if(!product)  dispatch(fetchProductAsync(parseInt(id!)));
        console.log("dispatch 1");
    },[ product,id, dispatch])

    if(productStatus.includes('pending')) return <LoadingComponent message='Loading Product...'/>
  return (
    <div id="main-wrapper">
        <div className="site-wrapper-reveal">

            <div className="single-product-wrap section-space--pt_90 border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">

                            {/* <!-- Product Details Left --> */}
                            <div className="product-details-left">
                                <div className="product-details-images-2 slider-lg-image-2">

                                    <div className="easyzoom-style">
                                        <div className="easyzoom easyzoom--overlay">
                                            <Link to="/images/product/single-product-01.webp" className="poppu-img">
                                                <img src={product?.urlPicture1} className="img-fluid" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="easyzoom-style">
                                        <div className="easyzoom easyzoom--overlay">
                                            <Link to="/images/product/single-product-02.webp" className="poppu-img">
                                                <img src="/images/product/single-product-03.webp" className="img-fluid" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="easyzoom-style">
                                        <div className="easyzoom easyzoom--overlay">
                                            <Link to="/images/product/single-product-03.webp" className="poppu-img">
                                                <img src="/images/product/single-product-03.webp" className="img-fluid" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="easyzoom-style">
                                        <div className="easyzoom easyzoom--overlay">
                                            <Link to="/images/product/single-product-04.webp" className="poppu-img">
                                                <img src="/images/product/single-product-04.webp" className="img-fluid" alt=""/>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="product-details-thumbs-2 slider-thumbs-2">
                                    <div className="sm-image"><img src="/medias/images/product/small/1-100x100.webp" alt=""/></div>
                                    <div className="sm-image"><img src="/medias/images/product/small/2-100x100.webp" alt=""/></div>
                                    <div className="sm-image"><img src="/medias/images/product/small/3-100x100.webp" alt=""/></div>
                                    <div className="sm-image"><img src="/medias/images/product/small/4-100x100.webp" alt=""/></div>
                                </div>
                            </div>
                            {/* <!--// Product Details Left --> */}

                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                            <div className="product-details-content ">

                                <h5 className="font-weight--reguler mb-10">{product?.name}</h5>

                                <h3 className="price">{product?.price}</h3>



                                <div className="quickview-peragraph mt-10">
                                    <p>At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.</p>
                                </div>



                                <div className="product-size-wrapper mt-20">
                                    <div className="tab-content d-flex">
                                        <label className="mr-2">Size</label>
                                        <div className="tab-pane fade show active" id="tab_list_l">
                                            L
                                        </div>
                                        <div className="tab-pane fade" id="tab_list_m">
                                            M
                                        </div>
                                        <div className="tab-pane fade" id="tab_list_s">
                                            S
                                        </div>
                                    </div>

                                    <ul className="nav product-size-menu" role="tablist">

                                        <li className="tab__item nav-item active">
                                            <Link className="nav-link active" data-bs-toggle="tab" to="#tab_list_l" role="tab">L</Link>
                                        </li>
                                        <li className="tab__item nav-item">
                                            <Link className="nav-link" data-bs-toggle="tab" to="#tab_list_m" role="tab">M</Link>
                                        </li>
                                        <li className="tab__item nav-item">
                                            <Link className="nav-link" data-bs-toggle="tab" to="#tab_list_s" role="tab">S</Link>
                                        </li>

                                    </ul>
                                </div>


                                <div className="product-color-wrapper mt-20">
                                    <div className="tab-content d-flex">
                                        <label className="mr-2">Color </label>
                                        <div className="tab-pane fade show active" id="tab_list_black">
                                            Black
                                        </div>
                                        <div className="tab-pane fade" id="tab_list_white">
                                            White
                                        </div>
                                    </div>

                                    <ul className="nav product-color-menu" role="tablist">
                                        <li className="tab__item nav-item active">
                                            <Link className="nav-link active" data-bs-toggle="tab" to="#tab_list_black" role="tab"></Link>
                                        </li>
                                        <li className="tab__item nav-item">
                                            <Link className="nav-link" data-bs-toggle="tab" to="#tab_list_white" role="tab"></Link>
                                        </li>
                                    </ul>

                                </div>


                                <div className="quickview-action-wrap mt-30">
                                    <div className="quickview-cart-box">
                                        <div className="quickview-quality">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="0"/>
                                            </div>
                                        </div>

                                        <div className="quickview-button">
                                            <div className="quickview-cart button">
                                                <Link to="product-details.html" className="btn--lg btn--black font-weight--reguler text-white">Add to cart</Link>
                                            </div>
                                            <div className="quickview-wishlist button">
                                                <Link title="Add to wishlist" to="#"><i className="icon-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="product_meta mt-30">
                                    <div className="sku_wrapper item_meta">
                                        <span className="label"> SKU: </span>
                                        <span className="sku"> 502 </span>
                                    </div>
                                    <div className="posted_in item_meta">
                                        <span className="label">Categories: </span><Link to="#">{product?.category}</Link>, <Link to="#">Table</Link>
                                    </div>
                                    <div className="posted_in item_meta">
                                        <span className="label">Brand: </span><Link to="#">{product?.brand}</Link>
                                    </div>
                                    <div className="tagged_as item_meta">
                                        <span className="label">Tag: </span><Link to="#"></Link>
                                    </div>
                                </div>

                                <div className="product_socials section-space--mt_60">
                                    <span className="label">Share this items :</span>
                                    <ul className="helendo-social-share socials-inline">
                                        <li>
                                            <Link className="share-twitter helendo-twitter" to="#" target="_blank"><i className="social_twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link className="share-facebook helendo-facebook" to="#" target="_blank"><i className="social_facebook"></i></Link>
                                        </li>
                                        <li>
                                            <Link className="share-google-plus helendo-google-plus" to="#" target="_blank"><i className="social_googleplus"></i></Link>
                                        </li>
                                        <li>
                                            <Link className="share-pinterest helendo-pinterest" to="#" target="_blank"><i className="social_pinterest"></i></Link>
                                        </li>
                                        <li>
                                            <Link className="share-linkedin helendo-linkedin" to="#" target="_blank"><i className="social_linkedin"></i></Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">
                            <div className="product-details-tab section-space--pt_90">
                                <ul role="tablist" className=" nav">
                                    <li className="active" role="presentation">
                                        <Link data-bs-toggle="tab" role="tab" to="#description" className="active">Description</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link data-bs-toggle="tab" role="tab" to="#sheet">Additional information</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link data-bs-toggle="tab" role="tab" to="#reviews">Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="product_details_tab_content tab-content mt-30">
                                {/* <!-- Start Single Content --> */}
                                <div className="product_tab_content tab-pane active" id="description" role="tabpanel">
                                    <div className="product_description_wrap">
                                        <div className="product-details-wrap">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7 order-md-1 order-2">
                                                    <div className="details mt-30">
                                                        <h5 className="mb-10">Detail</h5>
                                                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum omnis voluptas assumenda.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 order-md-2 order-1">
                                                    <div className="images">
                                                        <img src="assets/images/product/single-product-01.webp" className="img-fluid" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-details-wrap">
                                            <div className="row align-items-center">
                                                <div className="col-lg-7 order-md-1 order-2">
                                                    <div className="details mt-30">
                                                        <div className="pro_feature">
                                                            <h5 className="title_3 mb-10">Features</h5>
                                                            <ul className="feature_list">
                                                                <li><Link to="#"><i className="arrow_triangle-right"></i>Fully padded back panel, web hauded handle</Link></li>
                                                                <li><Link to="#"><i className="arrow_triangle-right"></i>Internal padded sleeve fits 15″ laptop</Link></li>
                                                                <li><Link to="#"><i className="arrow_triangle-right"></i>Internal tricot lined tablet sleeve</Link></li>
                                                                <li><Link to="#"><i className="arrow_triangle-right"></i>One large main compartment and zippered</Link></li>
                                                                <li><Link to="#"><i className="arrow_triangle-right"></i>Premium cotton canvas fabric</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 order-md-2 order-1">
                                                    <div className="images">
                                                        <img src="assets/images/product/single-product-02.webp" className="img-fluid" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Content -->
                                <!-- Start Single Content --> */}
                                <div className="product_tab_content tab-pane" id="sheet" role="tabpanel">
                                    <div className="pro_feature">
                                        <table className="shop_attributes">
                                            <tbody>
                                                <tr>
                                                    <th>Weight</th>
                                                    <td>1.2 kg</td>
                                                </tr>
                                                <tr>
                                                    <th>Dimensions</th>
                                                    <td>12 × 2 × 1.5 cm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* <!-- End Single Content -->
                                <!-- Start Single Content --> */}
                                <div className="product_tab_content tab-pane" id="reviews" role="tabpanel">

                                    {/* <!-- Start RAting Area --> */}
                                    <div className="rating_wrap mb-30">
                                        <h4 className="rating-title-2">Be the first to review “Wooden chair”</h4>
                                        <p>Your rating</p>
                                        <div className="rating_list">
                                            <div className="product-rating d-flex">
                                                <i className="yellow icon_star"></i>
                                                <i className="yellow icon_star"></i>
                                                <i className="yellow icon_star"></i>
                                                <i className="yellow icon_star"></i>
                                                <i className="yellow icon_star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End RAting Area --> */}
                                    <div className="comments-area comments-reply-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <form action="#" className="comment-form-area">
                                                    <p className="comment-form-comment">
                                                        <label>Your review *</label>
                                                        <textarea className="comment-notes" required></textarea>
                                                    </p>
                                                    <div className="comment-input">
                                                        <p className="comment-form-author">
                                                            <label>Name <span className="required">*</span></label>
                                                            <input type="text" required name="Name"/>
                                                        </p>
                                                        <p className="comment-form-email">
                                                            <label>Email <span className="required">*</span></label>
                                                            <input type="text" required name="email"/>
                                                        </p>
                                                    </div>

                                                    <div className="comment-form-submit">
                                                        <input type="submit" defaultValue="Submit" className="comment-submit"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Single Content --> */}
                            </div>
                        </div>
                    </div>

                    <div className="related-products section-space--ptb_90">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb-30">
                                    <h4>Related products</h4>
                                </div>
                            </div>
                        </div>

                        <div className="product-slider-active">
                            <div className="col-lg-12" >
                                {/* <!-- Single Product Item Start --> */}
                                <div className="single-product-item text-center">
                                    <div className="products-images">
                                        <Link to="product-details.html" className="product-thumbnail">
                                            <img src="/medias/images/product/1_1-300x300.webp" className="img-fluid" alt="Product Images" style={{width: 300, height: 300}}/>

                                            <span className="ribbon out-of-stock ">
                                            Out Of Stock
                                        </span>
                                        </Link>
                                        <div className="product-actions">
                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus"></i><span className="tool-tip">Quick View</span></Link>
                                            <Link to="product-details.html"><i className="p-icon icon-bag2"></i> <span className="tool-tip">Add to cart</span></Link>
                                            <Link to="wishlist.html"><i className="p-icon icon-heart"></i> <span className="tool-tip">Browse Wishlist</span></Link>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h6 className="prodect-title"><Link to="product-details.html">Teapot with black tea</Link></h6>
                                        <div className="prodect-price">
                                            <span className="new-price">£40.00</span> - <span className="old-price"> £635.00</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                {/* <!-- Single Product Item End --> */}
                            </div>
                           

                        </div>
                    </div>

                </div>
            </div>

        </div>
        </div>

  )
}

export default ProductDetails