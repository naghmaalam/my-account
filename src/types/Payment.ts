export interface PaymentMethod {
  id: number;
  data: {
    secret_key: string;
    url: string;
  };
  mode: number;
  icon: string;
  name: string;
  currency_id: string;
}
