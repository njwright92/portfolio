import Carousels2 from "../features/carousels2";
import { Col, Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <Container>
      <SubHeader current='About' />
      <Row>
        <Col className="mx-auto col-6 img-fluid">
          <Carousels2 />
        </Col>
      </Row>
    </Container>
  );
};

export default About;