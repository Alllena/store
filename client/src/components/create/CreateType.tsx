import styled from "styled-components";
import { useAppDispatch } from "../../hooks/redux";
import { FlexContainer } from "../styled/FlexContainer";
import { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { createType } from "../../http/typeAPI";
import TypesTable from "../tables/TypeTable";

const CreateType = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addType = () => {
    dispatch(createType(value));
    setValue("");
  };

  return (
    <PageWrapper>
      <FlexContainer justify="space-between" className="title">
        <Button type="primary" onClick={showModal} size="large">
          Add type
        </Button>
        <Modal
          open={isModalOpen}
          onOk={() => {
            handleOk();
            addType();
          }}
          onCancel={handleCancel}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="Add type">
              <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </Form.Item>
          </Form>
        </Modal>
      </FlexContainer>
      <TypesTable />
    </PageWrapper>
  );
};
export default CreateType;

const PageWrapper = styled.div`
  padding: 15px 0;
  .title {
    padding-bottom: 10px;
    h2 {
      font-weight: 400;
    }
  }
`;
