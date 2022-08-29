import { useEffect } from 'react';
import ProductMiddle from '../../components/productmiddle/ProductMiddle';
import ProductSideBar from '../../components/productsidebar/ProductSideBar';
import SimilarProduct from '../../components/similarproduct/SimilarProduct';
import './product.scss';


const Product = () => {

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="product">
      <div className="product-wrapper">
        <div className="left">
          <ProductSideBar />
        </div>
        <div className="middle">
          <ProductMiddle />
        </div>
        <div className="right">
          <SimilarProduct />
        </div>
      </div>
    </div>
  )
}

export default Product