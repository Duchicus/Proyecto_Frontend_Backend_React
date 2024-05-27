import React from 'react'

const Cart = () => {

  const cartProducts = JSON.parse(localStorage.getItem('Cart'))
  console.log(cartProducts);
  return (
    <div>
      {cartProducts.map((product, index) => (
        <p key={index}>{product.name}</p>
      ))}
    </div>
  );
}

export default Cart