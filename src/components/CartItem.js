import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
const {removefc,inc,dec} =useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className='flex border-b'>
      <div className='w-full min-h-[120px] flex items-center
    gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
        </Link >
        <div className='w-full flex-col'>
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`}
              className='text-sm uppercasse font-medium max-w
            [240px] text-primary hover:underline'>
              {title}
            </Link>
            <div onClick={()=> removefc(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500
          hover:text-red-500 transition ' />
            </div>
            </div>
            <div className='flex gap-x-2 h-[36px]
          text-sm'>
              <div className='flex flex-1 max-w-[100px]
             items-center h-full border
              text-primary font-medium'>
                <div  onClick={()=>dec(id)} className='flex-1 flex 
                justify-center items-center cursor-pointer'><IoMdRemove /></div>
                <div className='h-full flex-1 flex justify-center 
                items-center px-2'>{amount}</div>
                <div className='flex-1 h-full flex 
                justify-center items-center cursor-pointer' onClick={()=>inc(id)}><IoMdAdd /></div>
              </div>
              <div className='flex justify-around items-center'>
                 Price: EGP {price}
                </div>
              <div className='flex-1 flex justify-end 
              items-center '>{`Total: EGP ${
                parseFloat(
                  price*amount
                ).toFixed(2)
              }`}</div>
            </div>
         
        </div>
      </div>
    </div>);
};

export default CartItem;
