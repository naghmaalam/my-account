export interface Plan {
  id: number;
  plan_time: number;
  billed: number;
  allowed_device_number: number;
  total_month: number;
  is_recommended: number;
  title: string;
  description: string;
  pricesArr: Price[];
}

export interface Price {
  currency_id: number;
  plan_id: number;
  code: string;
  symbol: string;
  price: number;
  discount_price: number;
  additional_device_price: number;
  price_per_month_des: string;
}

export interface ComponentPlan extends Plan {
  selected: boolean;
}

export enum PlanCodes {
  mon12 = 21,
  mon6 = 18,
  mon3 = 16,
  mon1 = 15,
}

// PlanCodes[PlanCodes.mon12].toString();  convert to string = "mon12"
