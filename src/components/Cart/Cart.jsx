import React from 'react'

const Cart = () => {

  const cartProducts = JSON.parse(localStorage.getItem('Cart')) || []

  const countMap = [];
  cartProducts.forEach(element => {
    countMap[element.name] = (countMap[element.name] || 0) + 1;
  });

  return (
    <div className="container-fluid d-flex align-items-center min-vh-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-6 mt-n5">
          <div className="card shadow">
            <div className="card-header bg-secondary text-light text-center">
              <h2>Products Cart</h2>
            </div>
            <div className="card-body">
              <div>
                <ul>
                  {Object.keys(countMap).map((productName, index) => (
                    <li key={index}>
                      <h4>x{countMap[productName]} {productName}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart