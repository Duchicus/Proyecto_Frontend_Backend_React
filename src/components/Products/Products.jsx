import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartsContext";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./Products.scss"

const Products = () => {

    const { products } = useContext(ProductsContext)
    const { addToCart } = useContext(CartContext)

    const [input, setInput] = useState({
        name: ""
    })
    const inputHave = (e) => {
        setInput({
            name: e.target.value
        })
    
    }
    return (
        <>
            <FaMagnifyingGlass className="glass" />
            <input type="text" className="product-search" name="name" onChange={inputHave} />
            <div id="products">
                {products.filter((productfilter) => productfilter.name.toLowerCase().includes(input.name.toLowerCase())).map((product) => (
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
                                            <span key={index} className="category-name">{category.name}</span>
                                        ))}
                                    </h5>
                                    <h5 className="amount money positive">{product.price} <span className="currency-symbol">$</span></h5><br />
                                    <button className="card-btn bg-dark" onClick={() => addToCart(product)}>
                                        <span className="text-light">Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products