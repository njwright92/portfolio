import { Col, Container, Row } from "reactstrap";
import nys from '../img/nys.gif';
import SubHeader from "../components/SubHeader";
import MyWork from "../features/Tabs";

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row>
                <Col className="mx-auto row-content">
                    <img src={nys} className="App-logo" alt="logo" />
                </Col>
                <Col className="mt-4 mx-auto">
                    <MyWork />
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    );

};

export default HomePage;