import { Form, Select, InputNumber, Input } from "antd";
import { useAppSelector } from "../../hooks/redux";
import { IProductForm } from "../../models/IProducts";

interface IProductFormProps {
  productForm: IProductForm;
  setProductForm: React.Dispatch<React.SetStateAction<IProductForm>>;
}

export const ProductForm: React.FC<IProductFormProps> = ({
  productForm,
  setProductForm,
}) => {
  const { typeId, modelId, colorId, isNew, sales, price, sizesId } =
    productForm;

  const { types } = useAppSelector((state) => state.typesReducer);
  const { sizes } = useAppSelector((state) => state.sizeReducer);
  const { models } = useAppSelector((state) => state.modelReducer);

  const filteredOptions = sizes.filter((o) => !sizesId.includes(o));

  const onChangeSales = (value: number | null) => {
    setProductForm((prev) => ({ ...prev, sales: value }));
  };
  const onChangePrice = (value: number | null) => {
    setProductForm((prev) => ({ ...prev, price: value }));
  };
  const { TextArea } = Input;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductForm((prev) => ({ ...prev, info: e.target.value }));
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Type">
        <Select
          value={typeId}
          onChange={(value) => {
            setProductForm((prev) => ({ ...prev, typeId: value }));
          }}
        >
          {types.map((type) => (
            <Select.Option key={type.id} value={type.id}>
              {type.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Model">
        <Select
          value={modelId}
          onChange={(value) => {
            setProductForm((prev) => ({ ...prev, modelId: value }));
          }}
        >
          {models.map((model) => (
            <Select.Option key={model.id} value={model.id}>
              {model.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Color">
        <Select
          value={colorId}
          onChange={(value) => {
            setProductForm((prev) => ({ ...prev, colorId: value }));
          }}
        >
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
      <Form.Item label="Description">
        <TextArea
          placeholder="textarea with clear icon"
          allowClear
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item label="Sizes">
        <Select
          mode="multiple"
          value={sizesId}
          onChange={(value) =>
            setProductForm((prev) => ({ ...prev, sizesId: value }))
          }
          style={{ width: "100%" }}
          options={filteredOptions.map((size) => ({
            value: size.id,
            label: size.name,
          }))}
        />
      </Form.Item>
      <Form.Item label="Is New">
        <Select
          value={isNew}
          onChange={(value) =>
            setProductForm((prev) => ({ ...prev, isNew: value }))
          }
        >
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
