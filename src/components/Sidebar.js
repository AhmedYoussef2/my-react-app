import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import './tank.css';
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
 const { cart,cle,total } = useContext(CartContext);
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='felxt items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          The Bag (0)
        </div >
      </div>
      <div onClick={handleClose}
        className='cursor-pointer w-8 h-8 j'>
        <IoMdArrowForward className=' text-2xl ' />
      </div>
      <div className='flex flex-col h-[30px]  lg:h-[550px] overflow-y-auto overflow-x-hidden border-b'>
      {cart.map((item)=>{
       return <CartItem item={item} key={item.id}/>;
      })}
      </div>
      <div className='flex  w-full justify-around items-center '>
      <span>Total: EGP {parseFloat(total).toFixed(3)} </span>
      <div onClick={cle} className='cursor-pointer '><FiTrash2/></div>
      </div>
    </div>
  );
};

export default Sidebar;
