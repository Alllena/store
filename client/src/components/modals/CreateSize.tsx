import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FlexContainer } from "../styled/FlexContainer";
import { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import { createSize, fetchSize } from "../../http/productAPI";
import SizesTable from "../tables/SizeTable";

const CreateSize = () => {
  const dispatch = useAppDispatch();
  const { sizes } = useAppSelector((state) => state.sizeReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(fetchSize());
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

  const addSize = () => {
    dispatch(createSize(value));
    setValue("");
  };

  return (
    <PageWrapper>
      <FlexContainer justify="space-between" className="title">
        <h2>Sizes</h2>
        <Button type="primary" onClick={showModal}>
          Add size
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          afterClose={addSize}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="Add size">
              <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </Form.Item>
          </Form>
        </Modal>
      </FlexContainer>
      <SizesTable sizes={sizes} />
    </PageWrapper>
  );
};
export default CreateSize;

const PageWrapper = styled.div`
  padding: 15px 0;
  .title {
    padding-bottom: 10px;
    h2 {
      font-weight: 400;
    }
  }
`;
