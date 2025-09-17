'use client';

import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type CartItem = {
  id: string | number;
  quantity: number;
  stripe_price_id: string;
  // agrega las demás props de los productos:
  [k: string]: any;
};

type CartContextType = {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  totalProducts: number;
  addProduct: (id: string | number, objProduct: CartItem) => void;
  removeItem: (id: string | number) => void;
  clear: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);

  // Cargar desde localStorage al montar (solo cliente)
  useEffect(() => {
    try {
        const raw = localStorage.getItem('cartArrayTechnologyReact');
        if (raw) setCart(JSON.parse(raw));
    } catch {}
  }, []);

  // Persistir y recalcular totales cuando cambia el cart
  useEffect(() => {
      localStorage.setItem('cartArrayTechnologyReact', JSON.stringify(cart));
    const total = cart.reduce((acc, c) => acc + (c.quantity || 0), 0);
    setTotalProducts(total);
  }, [cart]);

  const addProduct = (id: string | number, objProduct: CartItem) => {
    setCart(prev => {
      const exists = prev.some(c => c.id === id);
      if (exists) {
        const filtered = prev.filter(c => c.id !== id);
        return [...filtered, objProduct];
      }
      return [...prev, objProduct];
    });
  };

  const removeItem = (id: string | number) => {
    setCart(prev => prev.filter(c => c.id !== id));
  };

  const clear = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, addProduct, removeItem, clear, totalProducts }}>
      {children}
    </CartContext.Provider>
  );
}
