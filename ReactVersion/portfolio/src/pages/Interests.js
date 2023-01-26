import { Container, Row, Col } from "reactstrap";
import Carousels from "../features/carousels";
import Carousels2 from "../features/carousels2";

import SubHeader from "../components/SubHeader"

const Interests = () => {
  return (
    <Container>
      <SubHeader current='interests' />
      <Row>
        <Col>
          <Carousels />
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousels2 />
        </Col>
      </Row>
    </Container >
  );
};

export default Interests;