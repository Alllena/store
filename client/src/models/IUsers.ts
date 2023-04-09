import { IProduct, ISize } from "./IProducts";

export interface IBasketProduct {
  userId: number;
  product: IProduct;
  size: ISize;
  sizeId: number;
  id: number;
  count: number;
}

export interface IUser {
  id: number;
  email: string;
  role: string;
}
