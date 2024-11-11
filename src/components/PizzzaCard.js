import React from 'react';

const PizzaCard = ({ pizza, addToCart }) => {
  return (
    <div className="col-4">
      <div className="card" style={{ height: '35rem' }}>
        <img src={pizza.url} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">{pizza.desc}</p>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(pizza.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
