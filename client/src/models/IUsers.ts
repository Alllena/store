import { IProduct } from "./IProducts";

export interface IBasketProduct {
  userId: number;
  id: number;
  count: number;
  product: IProduct;
  size: {
    id: number;
    name: number;
  };
}

export interface IUser {
  id: number;
  email: string;
  role: string;
}
