import { Col, Container, Row } from "reactstrap";
import nys from '../img/nys.gif';
import SubHeader from "../components/SubHeader";
import MyWork from "../features/Tabs";

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row>
                <Col>
                    <img src={nys} className="App-logo" alt="logo" />
                </Col>
            </Row>
            <Row>
                <Col className="mt-4 text-center">
                    <h1>My Work</h1>
                    <MyWork />
                </Col>
            </Row>
        </Container>
    );

};

export default HomePage;