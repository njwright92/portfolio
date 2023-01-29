import { Container, Row, Col } from "reactstrap";
import Carousels from "../features/carousels";
import SubHeader from "../components/SubHeader"

const Interests = () => {
  return (
    <Container>
      <SubHeader current='interests' />
      <Row>
        <Col className="col-6 mx-auto img-fluid">
          <Carousels />
        </Col>
      </Row>
    </Container >
  );
};

export default Interests;