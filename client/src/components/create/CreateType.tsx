import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FlexContainer } from "../styled/FlexContainer";
import { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import { createType, fetchTypes } from "../../http/typeAPI";
import TypesTable from "../tables/TypeTable";

const CreateType = () => {
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.typesReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(fetchTypes());
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
          onOk={handleOk}
          onCancel={handleCancel}
          afterClose={addType}
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
      <TypesTable types={types} />
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
