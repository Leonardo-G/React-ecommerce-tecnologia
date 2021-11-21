import React from 'react'
import { CartContextProvider } from './context/CartContext';
import { AppRouter } from "./router/AppRouter";

function App() {

  return (
    <CartContextProvider>
      <AppRouter />
    </CartContextProvider>
  );
}

export default App;
