import React from "react";
import { Space, Table, Button } from "antd";
import { IColor } from "../../models/IProducts";
import { DeleteOutlined } from "@ant-design/icons";
import { removeModel } from "../../http/modelAPI";
import Column from "antd/es/table/Column";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import ColorBlok from "../ColorBlok";

const ModelTable = () => {
  const dispatch = useAppDispatch();
  const { models } = useAppSelector((state) => state.modelReducer);

  const editItem = (modelId: string) => {
    dispatch(removeModel(modelId));
  };

  return (
    <Table
      rowKey="id"
      pagination={{
        defaultPageSize: 5,
      }}
      dataSource={models}
    >
      <Column title="Id" dataIndex="id" key="id" width="100px" align="center" />
      <Column
        title="Name"
        dataIndex="name"
        key="name"
        align="center"
        render={(text) => <p>{text}</p>}
      />
      <Column
        title="Colors"
        dataIndex="colors"
        key="colors"
        align="center"
        render={(colors: IColor[]) => <ColorBlok colors={colors} />}
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
export default ModelTable;
