import React, { useContext, useEffect } from 'react'
import OrderService from "../../service/OrderService";
import { UserContext } from '../../context/UsersContext';
import { notification, Empty } from 'antd';
import { CartContext } from '../../context/CartsContext';
import { MdOutlineShoppingBag } from "react-icons/md";
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
      let productsIds = cartProducts.map((product) => product.id)
      const productBuy = {
        UserId: user.id,
        ProductId: productsIds
      }
      OrderService.createOrder(productBuy)
      removeCart()
      return notification.success({
        message: 'Succesfully purchased'
      });
    } else if (!user) {
      return notification.error({
        message: 'You must login for buy'
      });
    } else if (cartProducts.length === 0) {
      return notification.error({
        message: 'You must buy something'
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
                {Object.keys(countMap).map((productName, index) => (
                  <p key={index}>
                    <span> {productName}</span>
                    <button className='addRemoveButton bg-dark text-light' onClick={() => addCart(productName)}>+</button>
                    {countMap[productName]}
                    <button className='addRemoveButton bg-dark text-light' onClick={() => removeOneCart(productName)}>-</button>
                  </p>
                ))}
              </div>) : (
              <div className="card-body">
                <div>
                  <Empty description={<span>Empty cart </span>} />
                </div>
              </div>
            )}
            <div className='card-footer-cart d-flex justify-content-between align-items-center money positive'>
              <button className="Btn">
                <div className="sign">
                  <svg viewBox="0 0 512 512" className="store-icon">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div className="text" onClick={buyIt}>Buy</div>
              </button>
              <span className='amount p-4'>{totalPrice()} <span className='currency-symbol'>$</span></span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Cart