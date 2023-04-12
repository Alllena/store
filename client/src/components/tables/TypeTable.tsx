import React from "react";
import { Space, Table, Button } from "antd";
import { IType } from "../../models/IProducts";
import { DeleteOutlined } from "@ant-design/icons";
import { removeType } from "../../http/typeAPI";
import Column from "antd/es/table/Column";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const TypeTable = () => {
  const { types } = useAppSelector((state) => state.typesReducer);
  const dispatch = useAppDispatch();
  const editItem = (typeId: string) => {
    dispatch(removeType(typeId));
  };

  return (
    <Table
      rowKey="id"
      pagination={{
        defaultPageSize: 5,
      }}
      dataSource={types}
    >
      <Column title="Id" dataIndex="id" key="id" width="100px" align="center" />
      <Column
        title="Name"
        dataIndex="name"
        key="name"
        render={(text) => <p>{text}</p>}
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
export default TypeTable;
