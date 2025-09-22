export interface IGetSession {
    id: string;
    paymentIntentId: string,
    amount_total: number,
    order_id: string,
    status: string,
}