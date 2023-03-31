import Carousels2 from "../features/carousels2";
import { Col, Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <Container>
      <SubHeader current="about" />
      <h1 className="text-center mb-5"><strong>About Me</strong></h1>
      <Row className="align-items-center">
        <Col className="col-12 col-md-6 col-lg-5 mx-auto">
          <Carousels2 />
        </Col>
        <Col className="col-12 col-md-6 col-lg-7 mx-auto">
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5 className="font-weight-bold">I'm currently a Chef/Bartender, but I'm studying to transition into tech.</h5>
            </li>
            <li className="mb-4">
              <h5 className="font-weight-bold">I love traveling and discovering new cultures. It's a great way to gain new experiences and broaden my horizons.</h5>
            </li>
            <li className="mb-4">
              <h5 className="font-weight-bold">"Something you might not know by looking at me is I can run really fast" - <em>Jerry Seinfeld</em>. I'm a big fan of stand-up comedy.</h5>
            </li>
            <li className="mb-4">
              <h5 className="font-weight-bold">I enjoy the process of creation, whether it be brewing, cooking, or building web applications.</h5>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col className="col-8 col-md-6 col-lg-4 text-center">
          <p className="font-italic mb-0">"I got love"</p>
          <audio className="mt-1" src={require("../mp3s/i-got-love.mp3")} controls loop></audio>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
