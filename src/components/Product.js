import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
const Product = ({ product }) => {
 const {addToCart}=useContext(CartContext);
  const {  id,image,title, price } = product;
  return (
    <div className=''>
      <div className=' mx-3 border border-{#e4e4e4] h-[300px] mb-4 relative overflow-hiddenn group transition bg-stone-100 '>
        <div className='w-full h-full  flex justify-center items-center bg-stone-50 '>
          {
            /*image */
          }
          <div className='w-[200px] mx-auto flex justify-center items-center bg-stone-50'>
            <img className='max-h-[160px] group-hover:scale-110 
            transition duration-300 bg-stone-50'
              src={image} alt='' />
          </div>
        </div>
        <div className='absolute  right-0 bottom-0
        group-hover:bottom-2  p-2 flex 
        items-center justify-center gap-y-2 opacity-0 
        group-hover:opacity-100 transition-all duration-300 p-1'>
          <button  onClick={()=>addToCart(product,id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-sky-500/100'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white hover:bg-gray-200 flex justify-center
          items-center text-primary drop-shadow-xl'><BsEyeFill /></Link>
        </div>
      </div>
      <div className='mx-10'>
        <Link to={`/product/${id}`}>
          <h2>{title}</h2>
        </Link>
        <div className='font-bold mb-1'>EGP {price}</div>
      </div>
    </div>
  );
};

export default Product;