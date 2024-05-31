import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('Cart')) || []);
  const [cartCount, setCartCount] = useState(cartProducts.length);

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cartProducts));
    setCartCount(cartProducts.length);
  }, [cartProducts]);

  const addToCart = (product) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeToCart = (product) => {
    setCartProducts((prevProducts) => {
      const productIndex = prevProducts.findIndex((prod) => prod.name === product.name);
      if (productIndex !== -1) {
        const newProducts = [...prevProducts];
        newProducts.splice(productIndex, 1);
        return newProducts;
      }
      return prevProducts;
    });
  };

  const removeCart = () => {
    setCartProducts([])
  }

  return (
    <CartContext.Provider value={{
      cartProducts,
      addToCart,
      cartCount,
      removeCart,
      removeToCart
    }}>

      {children}
    </CartContext.Provider>
  );
};