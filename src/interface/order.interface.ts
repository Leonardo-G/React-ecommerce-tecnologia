import { Timestamp } from "firebase/firestore";

export interface ProductoOrder {
  id: string;
  imgs: string;
  modelo: string;
  precio: string;
  quantity: number;
  stripe_price_id: string;
}

export interface PaymentDetail {
  card: string | null;
  email: string | null;
  last4: string;
}

export interface IOrder {
  date: Date;
  paid_at: Timestamp;
  paymentDetail: PaymentDetail;
  paymentType: string[];
  products: ProductoOrder[];
  status: string;
  stripe_session_id: string;
  total: number;
}
