import { Container, Row, Col } from "reactstrap";
import Carousels from "../features/carousels";
import SubHeader from "../components/SubHeader";

const Interests = () => {
  return (
    <Container>
      <SubHeader current="Interests" />
      <h1 style={{ fontSize: "3em", textShadow: "2px 2px white" }}>
        <strong>
          Passions
        </strong>
      </h1>
      <Row className="align-items-center">
        <Col className="col-12 col-md-6 col-lg-5 mx-auto mb-3 order-md-1">
          <Carousels />
        </Col>
        <Col className="col-12 col-md-6 col-lg-7 mx-auto order-md-2">
          <div
            style={{
              boxShadow: "5em 2em 1em rgba(0,0,0,0.5)",
              padding: "1.25em",
              borderRadius: "2em",
              border: ".5em solid white"
            }}
          >
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.5em", fontWeight: 'bold', }}>
              Software Development & Snowboarding!
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold', }}>
              I thrive on continuous learning and building my skills. I am dedicated to staying up-to-date with the latest technologies and trends. My drive and determination extend beyond the tech world. AI has nothing on me.
            </p>
            <p style={{ margin: "0", fontSize: "1.125em", fontWeight: 'bold' }}>
              I am a well-rounded individual with a love for adventure and a hunger for success.
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              If I could replay an experience, It'd be when I rode a chair lift with Chris Bradshaw. "I do it all for the kids man".
            </p>
            <p style={{ margin: "0 0 0.625em 0", fontSize: "1.125em", fontWeight: 'bold' }}>
              One goal I want to accomplish is to "just live" comfortably, and travel the world.
            </p>
            <p style={{ margin: "0", fontSize: "1.125em", fontWeight: 'bold' }}>
              Also like money and women.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Interests;

