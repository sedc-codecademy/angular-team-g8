import { Product } from './product.interface';

export interface iOrder {
  id: number;
  products: Product[];
  totalPrice: number;
  status: string;
}
