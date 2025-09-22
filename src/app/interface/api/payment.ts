export interface IGetPayment {
    id: string;
    paymentMethod: IPaymentMethod;
}

interface IPaymentMethod {
    card: string;
    last4: string;
}