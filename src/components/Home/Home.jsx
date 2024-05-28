import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";
import "./Home.scss"

const Home = () => {

  const { products, getProducts } = useContext(ProductsContext)

  let cart = JSON.parse(localStorage.getItem('Cart')) || []

  useEffect(() => {
    getProducts()
  }, [])

  const onCart = (id) => {
    const onSelected = products.filter(product => product.id === id)
    cart.push(...onSelected)
    localStorage.setItem('Cart', JSON.stringify(cart))
  }

  return (
    <div id="products" className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow rounded" id="card">
              <div className="card-body" onClick={() => onCart(product.id)}>
                <h4 className="card-title">{product.name}</h4>
                <h5 className="card-title">{product.price}€</h5>
                <span>Categoria/s :</span>
                <p>
                  {product.Categories.map((category, index) => (
                    <span key={index}>{category.name}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home