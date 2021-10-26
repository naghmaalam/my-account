export interface Order {
  order_id: number;
  order_number: string;
  amount: number;
  created_at: Date | null;
  payment_method_name: string;
  currency_code: string;
  currency_symbol: string;
  plan_name: string;
}
