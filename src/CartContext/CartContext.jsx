import axios from 'axios';
import React, { createContext, useState } from 'react'
import { useEffect } from 'react';


export const cartContext = createContext();
export default function CartContextProvider({children}) {

const [allProducts , setAllProducts] =  useState(null);
const [totalCartPrice ,setTotalCartPrice ] = useState(0);
const[numOfCartItems , setNumOfCartItems] = useState(0);
const [cartId , setCartId] = useState(null);

function updateUI(){
  setAllProducts(null)
  setNumOfCartItems(0);
  setTotalCartPrice(0);
  setCartId(null);
}


console.log('allProducts' ,allProducts);
//lazm async 3ashan trg3lna not to return undefined
 async function addProduct(productId) {
    try {
        const response = await axios.post(
          'https://ecommerce.routemisr.com/api/v1/cart',
          { productId: productId },
          {
            headers: {
              token: localStorage.getItem('tkn'),
            },
          }
        );

        
//3ashan moshkelt el add 
        getUserCart()

        return true;

  
        
      } catch (error) {
        console.error('Error adding product to cart:', error); // تعديل: عرض رسالة الخطأ
        return false;
      }
    }


function getUserCart (){
    axios.get('https://ecommerce.routemisr.com/api/v1/cart' ,{

        headers: {
            token: localStorage.getItem('tkn'),
    } }
    )
       .then((response ) => {
         setAllProducts(response.data.data.products);
         setNumOfCartItems(response.data.numOfCartItems);
          setTotalCartPrice(response.data.data.totalCartPrice);
          setCartId(response.data.data._id);

       })
       .catch((error) => {
        console.log('error' ,error);
        
       })



}


function updateCounter(productId , newCount){
  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
   { count : newCount} ,
   {
    headers:{
      token : localStorage.getItem('tkn'),
    },
   }
  )

  .then((response) => 
  {
    setAllProducts(response.data.data.products);
    setNumOfCartItems(response.data.numOfCartItems);
     setTotalCartPrice(response.data.data.totalCartPrice);
  })
  .catch((error) => {
    console.log('response' ,error)
  })
}

function removeProduct(productId) {
  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
    headers: {
      token: localStorage.getItem('tkn'),
    }
  })
  .then((response) => {
    setAllProducts(response.data.data.products);
    setNumOfCartItems(response.data.numOfCartItems);
    setTotalCartPrice(response.data.data.totalCartPrice);
  })
  .catch((error) => {
    console.log('Error removing product from cart:', error);
  });
}

function clearAll() {
  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
    headers: {
      token: localStorage.getItem('tkn'),
    }
  })
  .then((response) => {
    setAllProducts([]);
    setNumOfCartItems(0);
    setTotalCartPrice(0);
  })
  .catch((error) => {
    console.log('Error removing product from cart:', error);
  });
}


//to make the user login morethan 1 time ad see its cart
useEffect(() => {
    getUserCart();
},[]);




  return(
     <cartContext.Provider value={{
    addProduct,
    allProducts,
    totalCartPrice,
    numOfCartItems,
    getUserCart,
    updateCounter,
    removeProduct,
    clearAll,
    cartId,
    updateUI,

  }}>


    {children}
  </cartContext.Provider>);
}
