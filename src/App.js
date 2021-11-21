import React from 'react'
import { CartContextProvider } from './context/CartContext';
import { AppRouter } from "./router/AppRouter";
import "./App.scss"

function App() {

  return (
    <CartContextProvider>
      <AppRouter />
    </CartContextProvider>
  );
}

export default App;
