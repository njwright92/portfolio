import { Col, Container, Row } from "reactstrap";
import nys from '../img/nys.gif';
import SubHeader from "../components/SubHeader";
import MyWork from "../features/Tabs";
import SiteRequest from "../features/SiteRequest";
import { Button } from 'reactstrap';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row className="align-items-center">
                <Col className="mx-auto mb-2 mt-2">
                    <Button id='gif_game' className="btn btn-lg btn-danger">Show GIF</Button>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="mx-auto mb-2 mt-4">
                    <img src={nys} className="App-logo" alt="logo" />
                </Col>
                <Col className="mt-4 mb-2 mx-auto">
                    <MyWork />
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="col-4 mx-auto mt-2 mb-2 row-content">
                    <SiteRequest />
                </Col>
            </Row>
        </Container>
    );

};

export default HomePage;