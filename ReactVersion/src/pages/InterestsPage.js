import { Container, Row, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";
import Carousels2 from "../features/carousels2";

const Interests = () => {
  return (
    <Container>
      <SubHeader current="Interests" />
      <h1 className="text-center mb-5"><strong>Interests</strong></h1>
      <Row className="align-items-center">
        <Col className="col-12 col-md-6 col-lg-7 mx-auto">
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5 className="font-weight-bold">Snowboarding</h5>
            </li>
            <li className="mb-4">
              <h5 className="font-weight-bold">If I could replay an experience, I would go back to Bear Mountain when I rode a chair lift with my favorite pro snowboarder, Chris Bradshaw. "I do it all for the kids, man."</h5>
            </li>
            <li className="mb-4">
              <h5 className="font-weight-bold">One goal I want to accomplish is to "just live" comfortably and travel the world.</h5>
            </li>
            <li className="mb-4">
              <h5 className="font-weight-bold">I also love money and women.</h5>
            </li>
          </ul>
        </Col>
        <Col className="col-12 col-md-6 col-lg-5 mx-auto">
          <Carousels2 />
        </Col>
      </Row>
    </Container>
  );
};

export default Interests;
