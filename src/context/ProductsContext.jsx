import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const API_URL = "http://localhost:3001/products";

const initialState = {
  products: [],
};

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };

  const deleteProduct = async (productId) => {
    let token = localStorage.getItem("token")
    const res = await axios.delete(API_URL + `/id/${productId}`, {
      headers: {
        Authorization: token
      }
    });
    // dispatch({
    //   type: "DELETE_PRODUCT",
    //   payload: res.data,
    // });
    getProducts()
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
        deleteProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};