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
        <Col className="mx-auto col-6 row-content">
          <>
            <h1>About</h1>
            <ul>
              <h5>Snowboarding</h5>
              <li><h5>I'm currently a Chef/Bartender, but I'm studying to transition into tech.</h5></li>
              <li><h5>Traveling is great, I love new experiences, and want to see more cultures.</h5></li>
              <li><h5>Also love money, and women.</h5></li>
            </ul>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default About;