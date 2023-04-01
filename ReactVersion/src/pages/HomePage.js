import { Col, Container, Row } from "reactstrap";
import nys from '../img/nys.gif';
import SubHeader from "../components/SubHeader";
import MyWork from "../features/Tabs";
import { Button } from 'reactstrap';
import gifGame from "../features/gifGame";
import SiteRequestCard from "../features/card";

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row className="align-items-center">
                <Col className="mx-auto mb-2 mt-2" id="gif_game">
                    <Button type='submit' id='game-button' color='danger' className="btn btn-lg" onClick={gifGame}>Show GIF</Button>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="mx-auto mb-2 mt-4">
                    <img src={nys} className="App-logo" alt="logo" style={{ borderRadius: '25%', boxShadow: "-5em -2em 1em rgba(0,0,0,0.5)" }} />
                </Col>

                <Col className="mt-4 mb-2 mx-auto" style={{ boxShadow: "5em 2em 1em rgba(0,0,0,0.5" }}>
                    <MyWork />
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="col-7 col-md-6 col-lg-4 mx-auto mt-2 mb-2">
                    <div
                        style={{
                            boxShadow: "-5em -2em 1em rgba(0,0,0,0.5)",
                            padding: "1.25em",
                            borderRadius: "2em",
                            border: ".5em solid white"
                        }}
                    >
                        <SiteRequestCard />
                    </div>
                </Col>
            </Row>
        </Container>
    );

};

export default HomePage;