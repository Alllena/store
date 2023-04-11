import React from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IColor } from "../../models/IProducts";
import Button, { ButtonLook } from "../base/Buttons";
import { DeleteOutlined } from "@ant-design/icons";

const columns: ColumnsType<IColor> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space align="end">
        <Button look={ButtonLook.main} onClick={() => {}}>
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
];

interface ITableProps {
  colors: IColor[];
}
const ColorTable: React.FC<ITableProps> = ({ colors }) => (
  <Table
    pagination={{
      defaultPageSize: 5,
    }}
    size="small"
    columns={columns}
    // dataSource={colors}
  />
);
export default ColorTable;
