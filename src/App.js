import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Contexts
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart(cart => [...cart, item]); // Each time i go into the cart and add a new item.
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <CartContext.Provider value={cart}>
          <Navigation cart={cart} />
        </CartContext.Provider>

        <Route exact path="/" component={Products} />

        <CartContext.Provider value={cart}>
          <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
        </CartContext.Provider>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
