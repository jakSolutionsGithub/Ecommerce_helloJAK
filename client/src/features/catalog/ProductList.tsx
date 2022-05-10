import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors, setProduct, setProductParams } from "./catalogSlice";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { productsLoaded } = useAppSelector((state) => state.catalog);
  const products = useAppSelector(productSelectors.selectAll);
  const dispatch = useAppDispatch();
  const [hasMore, setHasMore] = useState(true);
  const [loadOnce, setLoadOnce] = useState(true);

 
 
  const loadFunc =(async () => {
    console.log("test");
      dispatch(setProductParams({Skip: products.length, Take: 4}));
      dispatch(fetchProductsAsync());

    //  if (products.length === 0 || products.length < 4 ) {
    //   setHasMore(false);
    // } else {
    //   setHasMore(true);
    // }
    setHasMore(false);
  });

  // const handleScroll =(e:any)=>{
  //   if(window.innerHeight+ e.target.documentElement.scrollTop+1 >= e.target.documentElement.scrollHeight){
  //     dispatch(setProductParams({Skip: products.length, Take: 4}));
  //     var product = dispatch(fetchProductsAsync());
  //     dispatch(setProduct(product));
  //     // dispatch(setProduct([...products, product]))
      
  // }

 useEffect(() => {
  
   dispatch(fetchProductsAsync());
  //  window.addEventListener("scroll", handleScroll);
    setLoadOnce(false);
    
   
  }, [dispatch, loadOnce, products.length]);

  // if (!productsLoaded){
  //   return <LoadingComponent message="Loading Catalog..."/>;
  // } 

  return (
        <InfiniteScroll
        loadMore={loadFunc}
        loader={<div className="loader" key={0}>Loading ...</div>}
        threshold={250}
        hasMore={hasMore}
        pageStart={0}
        >
          <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </InfiniteScroll>
  );
};

export default ProductList;
