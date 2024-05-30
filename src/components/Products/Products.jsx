import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartsContext";
import "./Products.scss"

const Products = () => {

    const { products } = useContext(ProductsContext)
    const { addToCart } = useContext(CartContext)

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className="card-home flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-img"><img className="img" src={"http://localhost:3001/product_images/" + product.image_path} />
                                <div className="card-title">{product.name}</div>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className="card-subtitle">
                                <h5>
                                    {product.Categories.map((category, index) => (
                                        <span key={index}>{category.name}</span>
                                    ))}
                                </h5>
                                <h2>{product.price}$</h2><br />
                                <button className="card-btn bg-dark" onClick={() => addToCart(product)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="carrito-btn" viewBox="0 0 512 512">
                                        <path className="gold-fill" d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                                        <path className="gold-fill" d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                        <path className="gold-fill" d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                        <path className="gold-fill" d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Products