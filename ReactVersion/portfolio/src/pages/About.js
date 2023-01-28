import Carousels2 from "../features/carousels2";
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

const About = () => {
  return (
    <Container>
      <SubHeader current='About' />
      <Carousels2 />
    </Container>
  );
};

export default About;