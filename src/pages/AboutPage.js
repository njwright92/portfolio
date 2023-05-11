import { Col, Container, Row } from "reactstrap";
import Carousels2 from "../features/carousels2";
import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <Container>
      <SubHeader current="About" />
      <h1 style={{ fontSize: "3em", textShadow: "2px 2px white" }}>
        <strong>
          About
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
              I enjoy the process of creation, whether it be brewing, cooking, or web applications. Strive to engineer software that will make peoples lives easier.
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              If you're interested in seeing some of the code I've developed, please visit my gitHub account linked in the footer.
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              I am currently in the process of transitioning from my role in the Hospitality Industry, and freelance developer to pursuing my passion for tech. "Looking for part-time employment!"
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              I have a deep passion for exploring the world and immersing myself in new cultures. Traveling provides me with unique experiences, broadens my horizons, and pushes me out of my comfort zone.
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              "Something you might not know by looking at me is I can run really fast" <em>'Jerry Seinfeld'</em>
              <strong>"I think the aliens are already among us." 'Bill Burr'</strong>
            </p>

          </div>
        </Col>
      </Row>
      <Row className="align-items-center margin">
        <p style={{ margin: "1em", fontSize: "1.125em", fontWeight: 'bold' }}>
          "I got love" 'Nate Dogg'
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

