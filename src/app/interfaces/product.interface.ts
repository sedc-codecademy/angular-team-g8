export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  qty: number;
  shippingId: number;
}

export interface iProductState
{
  list: Product[];
  error: any;
  loading: boolean;
}