import React, { useMemo, useState } from "react";
import { Button, message, Steps } from "antd";
import ProductForm from "./form/ProductForm";
import styled from "styled-components";
import useProductForm from "../hooks/useProductForm";

const ProductCreateSteps: React.FC = () => {
  const { productForm, setProductForm, addDevice } = useProductForm();

  const [current, setCurrent] = useState(0);

  const steps = useMemo(() => {
    return [
      {
        title: "Add data",
        content: (
          <ProductForm
            productForm={productForm}
            setProductForm={setProductForm}
          />
        ),
      },
      {
        title: "Add files",
        content: <div> шаг 3</div>,
      },
    ];
  }, [productForm, setProductForm]);

  const next = () => {
    addDevice();
    setCurrent(() => current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps current={current} items={items} style={{ marginTop: 24 }} />
      <FormWrapper>{steps[current].content}</FormWrapper>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default ProductCreateSteps;

const FormWrapper = styled.div`
  padding-top: 20px;
  min-height: 460px;
`;
