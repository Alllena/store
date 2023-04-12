import { useState, useCallback } from "react";
import { useAppDispatch } from "./redux";
import { createProduct } from "../http/productAPI";
import { IProductForm } from "../models/IProducts";

const useProductForm = () => {
  const [productForm, setProductForm] = useState<IProductForm>({
    typeId: "",
    modelId: "",
    colorId: "",
    isNew: false,
    sales: 0,
    price: 0,
    sizesId: [],
  });

  const dispatch = useAppDispatch();

  const addDevice = useCallback(() => {
    dispatch(createProduct(productForm));
  }, [dispatch, productForm]);

  return { productForm, setProductForm, addDevice };
};

export default useProductForm;
