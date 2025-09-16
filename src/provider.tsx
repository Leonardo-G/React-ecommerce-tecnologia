'use client';
import { ReactNode } from 'react';
import { CartContextProvider } from '@/context/CartContext';

export default function Providers({ children }: { children: ReactNode }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
