import Product from '../models/Product.js';
import makeNetworkCall from './ApiClient.js';

const productOperations = {
  products: [],
  cart: [],

  async loadProducts() {
    const pizzas = await makeNetworkCall();
    const pizzaArray = pizzas['Vegetarian'];
    const productsArray = pizzaArray.map(
      (pizza) =>
        new Product(
          pizza.id,
          pizza.name,
          pizza.menu_description,
          pizza.price,
          pizza.assets.product_details_page[0].url
        )
    );
    this.products = productsArray;
    return productsArray;
  },

  search(pizzaId) {
    const product = this.products.find(
      (currentProduct) => currentProduct.id === pizzaId
    );
    product.isAddedInCart = true;
  },

  getProductsInCart() {
    return this.products.filter((product) => product.isAddedInCart);
  },
};

export default productOperations;
