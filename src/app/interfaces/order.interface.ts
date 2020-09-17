import { Product } from './product.interface';

export enum eOrderStatus {
  APPROVED = 'approved',
  REJECTED = 'rejected',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export interface iOrder {
  id: number;
  products: Product[];
  totalPrice: number;
  status: eOrderStatus;
}
