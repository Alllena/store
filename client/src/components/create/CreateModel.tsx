import styled from "styled-components";
import ModelTable from "../tables/ModelsTable";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FlexContainer } from "../styled/FlexContainer";
import { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import { createModel, fetchModel } from "../../http/modelAPI";
import { Checkbox, Col, Row } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { fetchColor } from "../../http/colorApi";

const CreateModel = () => {
  const dispatch = useAppDispatch();
  const { models } = useAppSelector((state) => state.modelReducer);
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
  useEffect(() => {
    dispatch(fetchModel());
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
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          afterClose={addModel}
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
                <Row>
                  <Col span={8}>
                    <Checkbox value={color.id}>{color.name}</Checkbox>
                  </Col>
                </Row>
              ))}
            </Checkbox.Group>
          </Form>
        </Modal>
      </FlexContainer>
      <ModelTable models={models} />
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
