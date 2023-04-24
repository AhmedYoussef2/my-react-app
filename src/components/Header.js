import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext'
import {  BsBag} from "react-icons/bs";
import {CartContext} from "../contexts/CartContext";
import bak from '../img/kat.png';
import i from '../img/vector.jpg';
import { Link } from 'react-router-dom';
import './tank.css';
const Header = () => {
  const { isOpen, setIsOpen } = useContext (SidebarContext);

  const{isActive,setAct}=useState(false);

useEffect(()=>{
window.addEventListener('scroll',()=>{
  window.scrollY>60 ? setAct(true):setAct(false);
});
});

  return (
    <header>
    <div className='flex  flex-row  items-center' >
      <Link to={'/'}><div className='mx-10 mt-4 text-xl font-bold'>Famita</div></Link>
    <div  onClick={()=>setIsOpen(!isOpen)}
    className='cursor-pointer flex mt-6 mr-4 ban'>
      <BsBag className='text-2xl'/>
    </div> 
    <div className='jun'><Link to={`/product/Spage`}><img src={i}></img></Link></div>
    </div>
    <div  className="mx-10 mt-4 h-[580px] flex justify-between items-center tank">
      <div className=''>
        <div className='text-2xl '>Shop Online EXclusive</div>
        <div  className='text-2xl font-medium '>Body <span style={{color:"rgb(87 188 153)"}}>HandBags</span></div>
      </div>
      <div className='mak'><div className='bank flex items-center'><div className='lag'><img src={bak}></img></div></div>
      </div>
    </div>
    <div className='links'>
    <Link className='pon' to={'/'}>Home</Link>
    <Link className='ton' to={'/'}>Future Items</Link>
    <Link className='ton yon' to={'/'}>Current Items</Link>
    </div>
    </header>
  );
};

export default Header;
