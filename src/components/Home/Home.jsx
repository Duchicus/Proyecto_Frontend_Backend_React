import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import "./Home.scss"
import Products from "../Products/Products";

const Home = () => {
  const { getProducts } = useContext(ProductsContext)
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Products />
    </>
  );
}

export default Home