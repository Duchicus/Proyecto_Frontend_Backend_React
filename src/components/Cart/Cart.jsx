import React from 'react'
import "./Cart.scss"

const Cart = () => {

  const cartProducts = JSON.parse(localStorage.getItem('Cart'))
  console.log(cartProducts);
  return (
    <div id='cart'>
      <div>
        {cartProducts.map((product, index) => (
          <p key={index}>{product.name} | {product.price}€</p>
        ))}
      </div>
    </div>
  );
}

export default Cart