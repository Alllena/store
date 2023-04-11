import React from "react";
import { Space, Table, Button } from "antd";
import { IColor } from "../../models/IProducts";
import { DeleteOutlined } from "@ant-design/icons";
import { removeColor } from "../../http/colorApi";
import Column from "antd/es/table/Column";
import { useAppDispatch } from "../../hooks/redux";

interface ITableProps {
  colors: IColor[];
}
const ColorTable: React.FC<ITableProps> = ({ colors }) => {
  const dispatch = useAppDispatch();
  const editItem = (colorId: string) => {
    dispatch(removeColor(colorId));
  };

  return (
    <Table
      pagination={{
        defaultPageSize: 5,
      }}
      dataSource={colors}
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
        key="id"
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
export default ColorTable;
