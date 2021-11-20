export interface Order {
  order_id: number;
  order_number: string;
  amount: number;
  created_at: Date | null;
  payment_method_name: string;
  currency_code: string;
  currency_symbol: string;
  plan_name: string;
  status: number;
}

export interface TableOrder {
  orderNum: string;
  subscription: string;
  orderStatus: string;
  paymentProvider: string;
  orderAmount: string;
  orderDate: string;
}

export interface Subscription {
  id: number;
  start_date: string;
  end_date: string;
  billed: number;
  is_deleted: number; // 1 = expired / deleted, 0 = active
  title: string;
  description: string;
}

export interface TableSubscription {
  reference: number;
  subscription: string;
  status: string;
  billed: string;
  expiryDate: string;
  action: string;
}
