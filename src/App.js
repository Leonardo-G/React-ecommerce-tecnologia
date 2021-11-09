import React, { useState } from 'react'
import { CartContext } from './components/context/CartContext';
import { AppRouter } from "./router/AppRouter";

function App() {

  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={ { cart, setCart } }>
      <AppRouter />
    </CartContext.Provider>
  );
}

export default App;
