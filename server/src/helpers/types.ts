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
  [key: string]: any;
};
