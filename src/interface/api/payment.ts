export interface IGetPayment {
    id: string;
    paymentType: string[];
    paymentDetail: IPaymentDetail;
}

export interface IPaymentDetail {
    card: string | null;
    last4: string | null;
    email: string | null;
}

export interface ICheckoutItem {
  price_id: string;
  quantity: number;
}

export interface IBody {
  items: ICheckoutItem[];
  order_id: string;
}