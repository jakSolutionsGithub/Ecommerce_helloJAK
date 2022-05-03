import React from 'react'
import { Link } from 'react-router-dom';
import { Product } from '../../app/models/product';

interface Props{
    product: Product;
}

const ProductCard = ({product}:Props) => {
  return (
    <>
   <div className="single-product-item text-center col-lg-3 col-md-3 col-sm-6">
        
          
            <div className="products-images">
                <a href="product-details.html" className="product-thumbnail">
                    <img src={product.urlPicture1} className="img-fluid" alt="Product Images" style={{width: 300, height: 300}}/>

                    <span className="ribbon out-of-stock ">
                    Out Of Stock
                </span>
                </a>
                <div className="product-actions">
                    <Link to="product-details.html"><i className="p-icon icon-bag2"></i> <span className="tool-tip">Add to cart</span></Link>
                    <Link to="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus"></i><span className="tool-tip">Quick View</span></Link>
                    <Link to="wishlist.html"><i className="p-icon icon-heart"></i> <span className="tool-tip">Browse Wishlist</span></Link>
                </div>
            </div>
            <div className="product-content">
                <h6 className="prodect-title"><a href="product-details.html">{product.name}</a></h6>
                <div className="prodect-price">
                    <span className="new-price">{product.price}</span> - <span className="old-price"> {product.price+ product.price/2}</span>
                </div>
            </div>
        
        
    </div>
    </>
  )
}

export default ProductCard;