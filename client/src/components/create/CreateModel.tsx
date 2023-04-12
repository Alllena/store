import styled from "styled-components";
import ModelTable from "../tables/ModelsTable";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FlexContainer } from "../styled/FlexContainer";
import { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { createModel } from "../../http/modelAPI";
import { Checkbox, Col, Row } from "antd";

const CreateModel = () => {
  const dispatch = useAppDispatch();
  const { colors } = useAppSelector((state) => state.colorReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [change, setChange] = useState([]);

  const onChange = (checkedValues: any) => {
    const colorsId = checkedValues.map((item: number) => {
      return { colorId: item };
    });
    setChange(colorsId);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addModel = () => {
    dispatch(createModel(value, change as []));
    setValue("");
  };

  return (
    <PageWrapper>
      <FlexContainer justify="space-between" className="title">
        <Button type="primary" onClick={showModal} size="large">
          Add model
        </Button>
        <Modal
          open={isModalOpen}
          onOk={() => {
            handleOk();
            addModel();
          }}
          onCancel={handleCancel}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="Add model">
              <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </Form.Item>
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              {colors.map((color) => (
                <Row key={color.id}>
                  <Col span={8}>
                    <Checkbox value={color.id}>{color.name}</Checkbox>
                  </Col>
                </Row>
              ))}
            </Checkbox.Group>
          </Form>
        </Modal>
      </FlexContainer>
      <ModelTable />
    </PageWrapper>
  );
};
export default CreateModel;

const PageWrapper = styled.div`
  padding: 15px 0;
  .title {
    padding-bottom: 10px;
    h2 {
      font-weight: 400;
    }
  }
`;
