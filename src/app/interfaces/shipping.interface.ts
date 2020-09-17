export enum eShippingType {
  AIR = 'air',
  CAR = 'car',
}

export enum eShippingCompany {
  POST = 'post',
  DHL = 'dhl',
  UPS = 'ups',
}

export interface iShipping {
  id: number;
  type: eShippingType;
  cost: number;
  company: eShippingCompany;
}
