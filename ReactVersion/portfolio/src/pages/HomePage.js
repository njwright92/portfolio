import { Col, Container, Row } from "reactstrap";
import nys from '../img/nys.gif';
import SubHeader from "../components/SubHeader";

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row>
                <Col>
                    <img src={nys} className="App-logo img-fluid img-thumbnail" alt="logo" />
                </Col>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Row>
        </Container>
    );

};

export default HomePage;