import styled from "styled-components";
import { FlexContainer } from "../styled/FlexContainer";
import { useState } from "react";
import { Modal, Button } from "antd";
import ProductTable from "../tables/ProductTable";
import ProductForm from "../form/ProductForm";
import ProductCreateSteps from "../ProductCreateSteps";

const CreateProduct = () => {
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

  const addProduct = () => {
    //   dispatch(createProduct(value));
    setValue("");
  };

  return (
    <PageWrapper>
      <FlexContainer justify="space-between" className="title">
        <Button type="primary" onClick={showModal} size="large">
          Add product
        </Button>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          afterClose={addProduct}
        >
          <ProductCreateSteps />
        </Modal>
      </FlexContainer>
      <ProductTable />
    </PageWrapper>
  );
};
export default CreateProduct;

const PageWrapper = styled.div`
  padding: 15px 0;
  .title {
    padding-bottom: 10px;
    h2 {
      font-weight: 400;
    }
  }
`;
