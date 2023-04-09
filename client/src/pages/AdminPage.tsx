import styled from "styled-components";
import { Col, Row } from "antd";
import { OutletWrapper } from "../components/styled/OutletWrapper";
import CreateColor from "../components/modals/CreateColor";
import CreateSize from "../components/modals/CreateSize";
import CreateType from "../components/modals/CreateType";

const AdminPage = () => {
  return (
    <OutletWrapper>
      <PageWrapper>
        <Row>
          <Col span={8} className="col">
            <CreateType />
          </Col>
          <Col span={8} className="col">
            <CreateColor />
          </Col>
          <Col span={8} className="col">
            <CreateSize />
          </Col>
        </Row>
        <Row>
          <Col span={24} className="col">
            col
          </Col>
        </Row>
        <Row>
          <Col span={24} className="col">
            col
          </Col>
        </Row>
      </PageWrapper>
    </OutletWrapper>
  );
};
export default AdminPage;

const PageWrapper = styled.div`
  padding: 15px 0;
  .col {
    padding: 10px;
  }
`;
