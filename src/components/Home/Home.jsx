import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import "./Home.scss"
import Products from "../Products/Products";

const Home = () => {

  const {getProducts } = useContext(ProductsContext)
  useEffect(() => {
    getProducts()
  }, [])

  return (
      <div id="products">
        <Products />
      </div>
  );
}

export default Home