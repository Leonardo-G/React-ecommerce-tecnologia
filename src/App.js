import React, { useEffect, useState } from 'react'
import { CartContext } from './components/context/CartContext';
import { AppRouter } from "./router/AppRouter";

function App() {

  const jsonArray = JSON.parse(localStorage.getItem("cartArray")) || [];

  const [cart, setCart] = useState(jsonArray);

  useEffect(() => {
    localStorage.setItem("cartArray", JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={ { cart, setCart } }>
      <AppRouter />
    </CartContext.Provider>
  );
}

export default App;
