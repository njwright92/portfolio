import { Col, Container, Row } from "reactstrap";
import nys from '../img/nys.gif';
import SubHeader from "../components/SubHeader";
import MyWork from "../features/Tabs";

const HomePage = () => {
    return (
        <div style={{ backgroundColor: 'olivedrab' }}>
            <Container>
                <SubHeader current='Home' />
                <Row>
                    <Col>
                        <img src={nys} className="App-logo" alt="logo" />
                    </Col>
                    <Col className="mt-4 text-center">
                        <h1>My Work</h1>
                        <MyWork />
                    </Col>
                </Row>
            </Container>
        </div>
    );

};

export default HomePage;