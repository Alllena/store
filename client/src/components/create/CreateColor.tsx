import styled from "styled-components";
import ColorTable from "../tables/ColorsTable";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FlexContainer } from "../styled/FlexContainer";
import { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import { createColor, fetchColor } from "../../http/productAPI";

const CreateColor = () => {
  const dispatch = useAppDispatch();
  const { colors } = useAppSelector((state) => state.colorReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(fetchColor());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Button type="primary" onClick={showModal}>
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
      <ColorTable colors={colors} />
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
