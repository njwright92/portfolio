import Carousels2 from "../features/carousels2";
import { Col, Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <Container>
      <SubHeader current='about' />
      <h1><strong>About Me</strong></h1>
      <Row className="align-items-center">
        <Col className="col-7 col-md-6 col-lg-5 mx-auto img-fluid">
          <Carousels2 />
        </Col>
        <Col className="col-5 col-md-6 col-lg-7 mx-auto row-content">
          <>
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