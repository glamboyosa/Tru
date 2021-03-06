// req.body type
export type SIMCheckType = {
  phone_number: string;
};
export type OAuthResponseType = {
  access_token: string;
  [key: string]: any;
};

export type SIMCheckResponseType = {
  status: string;
  no_sim_change: boolean;
  check_id: string;
  charge_amount: number;
  charge_currency: string;
  created_at: string;
  last_sim_change_at: string;
  _links: { self: { href: string } };
  snapshot_balance: number;
};
