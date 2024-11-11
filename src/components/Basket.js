import React from 'react';

const Basket = ({ cart }) => {
  let total = cart.reduce((acc, product) => acc + parseFloat(product.price), 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul id="basket">
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <p id="total">TOTAL: ${total}</p>
    </div>
  );
};

export default Basket;
