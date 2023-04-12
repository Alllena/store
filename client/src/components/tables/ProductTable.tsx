import React from "react";
import { Button, Space, Table, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { removeProduct } from "../../http/productAPI";
import { ISize } from "../../models/IProducts";

const ProductTable = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productReducer);
  const { Column } = Table;
  const editItem = (productId: string) => {
    dispatch(removeProduct(productId));
  };
  return (
    <Table dataSource={products} rowKey="id">
      <Column title="Id" dataIndex="id" key="id" width="100px" align="center" />
      <Column
        title="Model Name"
        dataIndex={["model", "name"]}
        key="modelName"
        align="center"
      />
      <Column
        title="Color"
        dataIndex={["color", "name"]}
        key="colorName"
        align="center"
      />
      <Column title="Price" dataIndex="price" key="price" align="center" />
      <Column title="Sales" dataIndex="sales" key="sales" align="center" />
      <Column
        title="Sizes"
        dataIndex="sizes"
        key="sizes"
        align="center"
        render={(sizes) => (
          <>
            {sizes.map((size: ISize) => (
              <Tag key={size.id}>{size.name}</Tag>
            ))}
          </>
        )}
      />
      <Column
        title="New?"
        dataIndex="isNew"
        key="isNew"
        render={(isNew) => (isNew ? "Yes" : "No")}
      />
      <Column
        title="Action"
        dataIndex="id"
        key="action"
        width="100px"
        align="center"
        render={(id) => (
          <Space>
            <Button
              type="primary"
              onClick={() => {
                editItem(String(id));
                console.log(id);
              }}
            >
              <DeleteOutlined />
            </Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default ProductTable;
