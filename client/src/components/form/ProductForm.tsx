import React, { useState } from "react";
import { Form, Select, InputNumber } from "antd";
import { createProduct } from "../../http/productAPI";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ISize } from "../../models/IProducts";

export const ProductForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.typesReducer);
  const { sizes } = useAppSelector((state) => state.sizeReducer);
  const { models } = useAppSelector((state) => state.modelReducer);

  const [typeId, setTypeId] = useState<string>("");
  const [modelId, setModelId] = useState<string>("");
  const [colorId, setColorId] = useState<string>("");
  const [isNew, setIsNew] = useState<boolean>(false);
  const [sales, setSales] = useState<number | null>(0);
  const [price, setPrice] = useState<number | null>(0);
  const [sizesId, setSizesId] = useState<ISize[]>([]);

  const filteredOptions = sizes.filter((o) => !sizesId.includes(o));

  const addDevice = () => {
    let formData = new FormData();
    formData.append("typeId", typeId);
    formData.append("modelId", modelId);
    formData.append("colorId", colorId);
    formData.append("isNew", `${isNew}`);
    formData.append("sales", `${sales}`);
    formData.append("price", `${price}`);
    formData.append("sizesId", JSON.stringify(sizesId));
    dispatch(createProduct(formData));
  };

  const onChangeSales = (value: number | null) => {
    setSales(value);
  };
  const onChangePrice = (value: number | null) => {
    setPrice(value);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Type">
        <Select value={typeId} onChange={(value) => setTypeId(value)}>
          {types.map((type) => (
            <Select.Option key={type.id} value={type.id}>
              {type.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Model">
        <Select value={modelId} onChange={(value) => setModelId(value)}>
          {models.map((model) => (
            <Select.Option key={model.id} value={model.id}>
              {model.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Color">
        <Select value={colorId} onChange={(value) => setColorId(value)}>
          {models.map(
            (model) =>
              model.id === +modelId &&
              model.colors.map((color) => (
                <Select.Option key={color.id} value={color.id}>
                  {color.name}
                </Select.Option>
              ))
          )}
        </Select>
      </Form.Item>
      <Form.Item label="Sizes">
        <Select
          mode="multiple"
          value={sizesId}
          onChange={setSizesId}
          style={{ width: "100%" }}
          options={filteredOptions.map((size) => ({
            value: size.id,
            label: size.name,
          }))}
        />
      </Form.Item>
      <Form.Item label="Is New">
        <Select value={isNew} onChange={(value) => setIsNew(value)}>
          <Select.Option value="true">Yes</Select.Option>
          <Select.Option value="false">No</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Price">
        <InputNumber
          type="number"
          value={price}
          min={0}
          max={500}
          onChange={onChangePrice}
        />
      </Form.Item>
      <Form.Item label="Sales">
        <InputNumber
          type="number"
          value={sales}
          min={0}
          max={100}
          onChange={onChangeSales}
        />
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
