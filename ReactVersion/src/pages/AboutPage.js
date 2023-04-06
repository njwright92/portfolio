import { Col, Container, Row } from "reactstrap";
import Carousels2 from "../features/carousels2";
import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <Container>
      <SubHeader current="About" />
      <h1 style={{ fontSize: "3em", textShadow: "2px 2px white" }}>
        <strong>
          About Me
        </strong>
      </h1>
      <Row className="align-items-center">
        <Col className="col-12 col-md-6 col-lg-5 mb-3 mx-auto order-md-2">
          <Carousels2 />
        </Col>
        <Col className="col-12 col-md-6 col-lg-7 mx-auto order-md-1">
          <div
            style={{
              boxShadow: "-5em -2em 1em rgba(0,0,0,0.5)",
              padding: "1.25em",
              borderRadius: "2em",
              border: ".5em solid white"
            }}
          >
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              I enjoy the process of creation, whether it be brewing, cooking, or web applications. Most recently learning how to develop software. Strive to code software that will make peoples lives easier.
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              I'm currently a BeerTender transitioning into Tech.
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              I love traveling and discovering new cultures. It's a great way to gain new experiences and broaden my horizons.
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              "Something you might not know by looking at me is I can run really fast" <em>'Jerry Seinfeld'</em>
            </p>

          </div>
        </Col>
      </Row>
      <Row className="align-items-center margin">
        <p style={{ margin: "1em", fontSize: "1.125em", fontWeight: 'bold' }}>
          "I got love"
          <audio
            src={require("../mp3s/i-got-love.mp3")}
            controls
            loop
          ></audio>
        </p>
      </Row>
    </Container>
  );
};

export default About;

