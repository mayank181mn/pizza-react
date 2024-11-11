import React, { useEffect, useState } from 'react';
import PizzaCard from './components/PizzzaCard.js';
import Basket from './components/Basket.js';
import productOperations from './services/ProductOperations.js';
import './App.css';


const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  // Load pizzas on component mount
  useEffect(() => {
    const fetchPizzas = async () => {
      const loadedPizzas = await productOperations.loadProducts();
      setPizzas(loadedPizzas);
    };
    fetchPizzas();
  }, []);

  // Add pizza to cart
  const addToCart = (pizzaId) => {
    productOperations.search(pizzaId);
    setCart(productOperations.getProductsInCart());
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row" id="output">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <Basket cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default App;
