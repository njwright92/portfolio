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
        <Col className="col-6 mx-auto row-content">
          <><h2>Interests</h2>
            <h5>Snowboarding</h5>
            <h5>I'm currently a Chef/Bartender, but I'm studying to transition into tech.</h5>
            <h5>Traveling is great, I love new experiences, and want to see more cultures.</h5>
            <h5>Also love money, and women.</h5>
          </>
        </Col>
      </Row>
    </Container >
  );
};

export default Interests;