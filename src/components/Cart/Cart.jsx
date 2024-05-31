import React, { useContext, useEffect } from 'react'
import OrderService from "../../service/OrderService";
import { UserContext } from '../../context/UsersContext';
import { Button, notification, Empty } from 'antd';
import { CartContext } from '../../context/CartsContext';
import "./Cart.scss"

const Cart = () => {

  const countMap = [];
  const user = JSON.parse(localStorage.getItem('User')) || []
  const cartProducts = JSON.parse(localStorage.getItem('Cart')) || []
  let total = 0
  const { token, getUserInfo } = useContext(UserContext)
  const { removeCart, addToCart, removeToCart } = useContext(CartContext)

  useEffect(() => {
    if (user) {
      getUserInfo();
    }
  }, [token]);


  const addCart = (product) => {
    let count = 0
    cartProducts.map((prod) => {
      if (prod.name === product && count === 0) {
        addToCart(prod)
        count++
      }
    })
    cartProducts.forEach(element => {
      countMap[element.name] = (countMap[element.name] || 0) + 1;
    });
  }

  const removeOneCart = (product) => {
    let count = 0
    cartProducts.map((prod) => {
      if (prod.name === product && count === 0) {
        removeToCart(prod)
        count++
      }
    })
    cartProducts.forEach(element => {
      countMap[element.name] = (countMap[element.name] || 0) + 1;
    });
  }

  addCart()

  const buyIt = async () => {
    if (user && cartProducts.length > 0) {
      let productsIds = cartProducts.map((product)=>product.id)
      console.log(user);
      const productBuy = {
        UserId: user.id,
        ProductId: productsIds
      }
      OrderService.createOrder(productBuy)
      removeCart()
      return notification.success({
        message: 'Succesfully purchased'
      });
    } else {
      return notification.error({
        message: 'You must login for buy'
      });
    }
  };

  const totalPrice = () => {
    cartProducts.map((productPrice) => {
      total += productPrice.price
    })
    return total
  }

  return (
    <div className="container-fluid d-flex align-items-center min-vh-100" id='cart-card'>
      <div className="row justify-content-center w-100">
        <div className="col-md-6 mt-n5">
          <div className="card shadow">
            <div className="card-header bg-dark text-light text-center">
              <h2>Products Cart</h2>
            </div>
            {cartProducts.length > 0 ? (
              <div className="card-body">
                <div>
                  <ul>
                    {Object.keys(countMap).map((productName, index) => (
                      <li key={index}>
                        <span>x{countMap[productName]} {productName}</span>
                        <button onClick={() => addCart(productName)}>+</button>
                        <button onClick={() => removeOneCart(productName)}>-</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>) : (
              <div className="card-body">
                <div>
                  <Empty description={<span>Empty cart </span>} />
                </div>
              </div>
            )}
            <div className='card-footer-cart d-flex justify-content-between align-items-center money positive'>
              <Button className='bg-dark text-light m-4' onClick={buyIt}>Buy</Button>
              <span className='amount p-4'>{totalPrice()} <span className='currency-symbol'>$</span></span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Cart