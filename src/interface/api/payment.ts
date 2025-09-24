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