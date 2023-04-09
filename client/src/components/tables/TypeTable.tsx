import React from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IType } from "../../models/IProducts";
import Button, { ButtonLook } from "../base/Buttons";
import { DeleteOutlined } from "@ant-design/icons";

const columns: ColumnsType<IType> = [
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
  types: IType[];
}
const TypesTable: React.FC<ITableProps> = ({ types }) => (
  <Table
    size="small"
    columns={columns}
    dataSource={types}
    pagination={{
      defaultPageSize: 5,
    }}
  />
);
export default TypesTable;
