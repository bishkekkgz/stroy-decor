import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import SearchScreen from "./components/SearchScreen";
import PrimeDecorPlintusNat from "./components/primedec/PrimeDecorPlintusNat";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      return savedCart;
    } catch (error) {
      console.error("Error parsing cart data:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/primedeccat" element={<PrimeDecorPlintusNat />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/productDetails/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
