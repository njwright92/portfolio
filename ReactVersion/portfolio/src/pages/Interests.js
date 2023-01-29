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
          <>
            <h1>Interests</h1>
            <ul>
              <li><h5> If I could replay an experience, I would go back to Bear Mountain. when I rode a chair lift
                with my favorite pro snowboarder. 'Chris Bradshaw' "I do it all for the kids man".</h5></li>
              <li><h5> One goal I want to accomplish is to "just live" comfortably, and travel the
                World.</h5></li>
            </ul>
          </>
        </Col>
      </Row>
    </Container >
  );
};

export default Interests;