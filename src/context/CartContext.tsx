"use client";
import {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type CartItem = {
  id: string | number;
  quantity: number;
  stripe_price_id: string;
  [k: string]: any;
};
type CartContextType = {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  totalProducts: number;
  addProduct: (id: string | number, obj: CartItem) => void;
  removeItem: (id: string | number) => void;
  clear: () => void;
};
export const CartContext = createContext<CartContextType | null>(null);

const LS_KEY = "cartArrayTechnologyReact";

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(cart));
    } catch {}
    setTotalProducts(cart.reduce((acc, c) => acc + (c.quantity || 0), 0));
  }, [cart]);

  const addProduct = (id: string | number, obj: CartItem) => {
    setCart((prev) => {
      const idx = prev.findIndex((c) => c.id === id);
      if (idx >= 0) {
        const copy = prev.slice();
        copy[idx] = obj;
        return copy;
      }
      return [...prev, obj];
    });
  };

  const removeItem = (id: string | number) =>
    setCart((prev) => prev.filter((c) => c.id !== id));

  const clear = () => {
    setCart([]);
    try {
      localStorage.removeItem(LS_KEY);
    } catch {}
  };

  const value = useMemo(
    () => ({ cart, setCart, totalProducts, addProduct, removeItem, clear }),
    [cart, totalProducts]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
