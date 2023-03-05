import Carousels2 from "../features/carousels2";
import { Col, Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <Container>
      <SubHeader current='about' />
      <h1><strong>About Me</strong></h1>
      <Row className="align-items-center">
        <Col className="col-7 col-md-6 col-lg-5 mx-auto">
          <Carousels2 />
        </Col>
        <Col className="col-5 col-md-6 col-lg-7 mx-auto row-content">
          <ul>
            <li><h5>I'm currently a Chef/Bartender, but I'm studying to transition into tech.</h5></li>
            <li><h5>Traveling is great, I love new experiences, and want to see more cultures.</h5></li>
            <li><h5>Also love money, and women.</h5></li>
            <li><h5>Something you might not know by looking at me is I can run really fast,
              big fan of standup comedy aspiring to get onstage for open mic.
              </h5></li>
          </ul>
        </Col>
        <Col>
          <p>"I got love"<audio class="mt-1" src={require("../mp3s/i-got-love.mp3")} controls loop></audio></p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;