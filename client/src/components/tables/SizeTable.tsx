import React from "react";
import { Space, Table, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { removeSize } from "../../http/sizeAPI";
import Column from "antd/es/table/Column";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const SizeTable = () => {
  const dispatch = useAppDispatch();
  const { sizes } = useAppSelector((state) => state.sizeReducer);

  const editItem = (sizeId: string) => {
    dispatch(removeSize(sizeId));
  };

  return (
    <Table
      rowKey="id"
      pagination={{
        defaultPageSize: 5,
      }}
      dataSource={sizes}
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
export default SizeTable;
