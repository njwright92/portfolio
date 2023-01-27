import Carousels2 from "../features/carousels2";
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <div style={{ backgroundColor: 'olivedrab' }}>
      <Container>
        <SubHeader current='About' />
        <Carousels2 />
      </Container>
    </div>
  );
};

export default About;