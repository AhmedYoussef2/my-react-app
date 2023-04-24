import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext} from '../contexts/CartContext';
import {ProductContext} from '../contexts/ProductContext';
const ProductDetails = () => {
const {id}=useParams();
const {products}=useContext(ProductContext);
const {addToCart}=useContext(CartContext);
const product=products.find((item)=>{
  return item.id ===parseInt(id);
});
if(!product){
  return <section className='h-screen flex justify-center 
  items-center'>
    Loading...
    </section>
}
const {title,price,description ,image}=product;

  return <section className='pt-32 pb-12 lg:py-32 h-screen'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center'>
      <div><img src={image} alt=''></img></div>
      <div className='mx-auto'>{title}</div>
      <div className='mx-auto'>Price:EGP{price}</div>
      </div>
    </div>
  </section>;
};

export default ProductDetails;
