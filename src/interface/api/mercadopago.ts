export interface MercadoPagoPayment {
  accounts_info: any | null;
  acquirer_reconciliation: any[];
  additional_info: {
    ip_address: string;
    items: any[];
    tracking_id: string;
  };
  authorization_code: string | null;
  binary_mode: boolean;
  brand_id: string | null;
  build_version: string;
  call_for_authorize_id: string | null;
  captured: boolean;
  card: Record<string, any>;
  charges_details: {
    accounts: Record<string, any>;
    amounts: Record<string, any>;
    base_amount: number;
    client_id: number;
    date_created: string;
    id: string;
    last_updated: string;
    metadata: Record<string, any>;
    name: string;
    rate: number;
    refund_charges: any[];
    reserve_id: string | null;
    type: string;
  }[];
  charges_execution_info: {
    internal_execution: {
      date: string;
      execution_id: string;
    };
  };
  collector_id: number;
  corporation_id: string | null;
  counter_currency: string | null;
  coupon_amount: number;
  currency_id: string;
  date_approved: string;
  date_created: string;
  date_last_updated: string;
  date_of_expiration: string | null;
  deduction_schema: string | null;
  description: string;
  differential_pricing_id: string | null;
  external_reference: string | null;
  fee_details: {
    amount: number;
    fee_payer: string;
    type: string;
  }[];
  financing_group: string | null;
  id: number;
  installments: number;
  integrator_id: string | null;
  issuer_id: string;
  live_mode: boolean;
  marketplace_owner: string | null;
  merchant_account_id: string | null;
  merchant_number: string | null;
  metadata: Record<string, any>;
  money_release_date: string;
  money_release_schema: string | null;
  money_release_status: "pending" | "released" | string;
  notification_url: string;
  operation_type: string;
  order: {
    id: string;
    type: string;
  };
  payer: {
    email: string;
    entity_type: string | null;
    first_name: string | null;
    id: string;
    identification: {
      number: string;
      type: string;
    };
    last_name: string | null;
    operator_id: string | null;
    phone: {
      number: string | null;
      extension: string | null;
      area_code: string | null;
    };
    type: string | null;
  };
  payment_method: {
    id: string;
    issuer_id: string;
    type: string;
  };
  payment_method_id: string;
  payment_type_id: string;
  platform_id: string | null;
  point_of_interaction: {
    application_data: {
      name: string;
      operating_system: string | null;
      version: string;
    };
    business_info: {
      branch: string;
      sub_unit: string;
      unit: string;
    };
    transaction_data: {
      e2e_id: string | null;
    };
    type: string;
  };
  pos_id: string | null;
  processing_mode: string;
  refunds: any[];
  release_info: string | null;
  shipping_amount: number;
  sponsor_id: string | null;
  statement_descriptor: string | null;
  status: "approved" | "rejected" | "in_process" | string;
  status_detail: string;
  store_id: string | null;
  tags: any | null;
  taxes_amount: number;
  transaction_amount: number;
  transaction_amount_refunded: number;
  transaction_details: {
    acquirer_reference: string | null;
    external_resource_url: string | null;
    financial_institution: string | null;
    installment_amount: number;
    net_received_amount: number;
    overpaid_amount: number;
    payable_deferral_period: string | null;
    payment_method_reference_id: string | null;
    total_paid_amount: number;
  };
  api_response: {
    status: number;
    headers: Record<string, any>;
  };
}
