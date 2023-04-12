import styled from "styled-components";
import ColorTable from "../tables/ColorsTable";
import { useAppDispatch } from "../../hooks/redux";
import { FlexContainer } from "../styled/FlexContainer";
import { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { createColor } from "../../http/colorApi";

const CreateColor = () => {
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

  const addColor = () => {
    dispatch(createColor(value));
    setValue("");
  };

  return (
    <PageWrapper>
      <FlexContainer justify="space-between" className="title">
        <Button type="primary" onClick={showModal} size="large">
          Add color
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          afterClose={addColor}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="Add color">
              <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </Form.Item>
          </Form>
        </Modal>
      </FlexContainer>
      <ColorTable />
    </PageWrapper>
  );
};
export default CreateColor;

const PageWrapper = styled.div`
  padding: 15px 0;
  .title {
    padding-bottom: 10px;
    h2 {
      font-weight: 400;
    }
  }
`;
