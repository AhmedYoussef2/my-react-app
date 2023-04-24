import React, { createContext, useState, useEffect } from 'react';
import CartItem from '../components/CartItem';

export const CartContext = createContext()



const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAount,SetItemAmount]=useState(0);
  const [total,settotal]=useState(0);
  useEffect(()=>{
    const total=cart.reduce((accumulator,currntItem)=>{
      return accumulator+currntItem.price*currntItem.amount;
    },0);
    settotal(total);
  });

  useEffect(()=>{
    if (cart) {
     const amount =cart.reduce((accumulator,currntItem)=>{
      return accumulator+currntItem.amount;
     },0);
     SetItemAmount(amount); 
    }
  },[cart])

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => { 
      return item.id === id;
     });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        else {
          return item;
        }
      });
      setCart(newCart);
    } 
    else {
      setCart([...cart, newItem]);
    }
  };

const removefc=(id)=>{
  const newCart=cart.filter((item)=>{
    return item.id !==id;
  });
  setCart(newCart);
}

const cle=()=>{
  setCart([]);
};

const inc=(id)=>{
  const cartItem=cart.find((item)=>item.id===id);
  addToCart(cartItem,id);
};

const dec=(id)=>{
  const cartItem=cart.find((item)=>{
    return item.id===id;
  });
  if (cartItem) {
    const newCart=cart.map((item)=>{
      if (item.id===id) {
        return {...item,amount:cartItem.amount-1}
      }else{
        return item;
      }
    });
    setCart(newCart);
  }
    if (cartItem.amount<2) {
      removefc(id);
    }
};

  return (
  <CartContext.Provider value={{total,itemAount,cart,addToCart,removefc,cle,inc,dec}}>
    {children}
  </CartContext.Provider>
  );
};

export default CartProvider;
