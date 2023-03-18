import { Container, Row, Col } from "reactstrap";
import Carousels from "../features/carousels";
import SubHeader from "../components/SubHeader"

const Interests = () => {
  return (
    <Container>
      <SubHeader current='Interests' />
      <h1><strong>Interests</strong></h1>
      <Row className="align-items-center">
        <Col className="col-7 col-md-6 col-lg-5 mx-auto ">
          <Carousels />
        </Col>

        <Col className="col-5 col-md-6 col-lg-7 mx-auto row-content">
          <ul>
            <h5>Snowboaring</h5>
            <li>
              <h5> If I could replay an experience, I would go back to Bear Mountain. when I rode a chair lift with my favorite pro snowboarder. 'Chris Bradshaw' "I do it all for the kids man".
              </h5>
            </li>
            <li>
              <h5> One goal I want to accomplish is to "just live" comfortably, and travel the
                World.
              </h5>
            </li>
            <li>
              <h5>Also love money and women.
              </h5>
            </li>
          </ul>
        </Col>
      </Row>
    </Container >
  );
};

export default Interests;