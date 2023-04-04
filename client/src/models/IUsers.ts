import { IProduct } from "./IProducts";

export interface IBasketProduct {
  id: number;
  count: number;
  product: IProduct;
  size: {
    id: number;
    name: number;
  };
}
