export interface IColor {
  id: number;
  name: string;
}

export interface IImg {
  id: number;
  isMain: boolean;
  isSecond: boolean;
  file: string;
}

export interface ISize {
  id: number;
  name: number;
}

export interface IModel {
  id: number;
  name: string;
  colors: IColor[];
}
export interface IType {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  price: number;
  sales: number;
  isNew: boolean;
  color: IColor;
  imgs: IImg[];
  sizes?: ISize[];
  model: IModel;
  type?: IType;
  info?: string;
}

export interface IProductForm {
  typeId: string;
  modelId: string;
  colorId: string;
  isNew: boolean;
  sales: number | null;
  price: number | null;
  sizesId: ISize[];
}
