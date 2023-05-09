import { Col, Container, Row } from "reactstrap";
import nys from '../img/nys.gif';
import SubHeader from "../components/SubHeader";
import MyWork from "../features/Tabs";
import { Button } from 'reactstrap';
import gifGame from "../features/gifGame";
import SiteRequestCard from "../features/card";
import { FaArrowUp } from "react-icons/fa";
import { FaFilePdf } from 'react-icons/fa';
import resume from '../img/Resume1.1.pdf';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row className="align-items-center">
                <h1 style={{ fontSize: "3em", textShadow: "2px 2px white" }}>
                    <strong>
                        Home
                    </strong>
                </h1>

                <Col className="mx-auto mb-2 mt-2">
                    <a href={resume} target="_blank" rel="noopener noreferrer" style={{ color: '#000080', fontSize: '2.5em' }}>
                        <FaFilePdf /> View My Resume
                    </a>
                </Col>


                <Col className="mx-auto mb-2 mt-2" id="gif_game">
                    <Button type='submit' id='game-button' color='danger' className="btn btn-lg" onClick={gifGame}>Show GIF</Button>
                    <p className="text-warning" style={{ marginTop: '1em', fontSize: '1.8em', fontWeight: 'bold' }}>
                        <FaArrowUp className="animate-bounce" />
                        Guessing Game!
                    </p>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="mx-auto mb-2 mt-4">
                    <img src={nys} className="App-logo" alt="logo" style={{ borderRadius: '25%', boxShadow: "-5em -2em 1em rgba(0,0,0,0.5)" }} />
                </Col>

                <Col className="mt-4 mb-2 mx-auto"
                    style={{
                        boxShadow: "5em 2em 1em rgba(0,0,0,0.5"
                    }}>
                    <MyWork />
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="col-7 col-md-6 col-lg-4 mx-auto mt-3 mb-2">
                    <div
                        style={{
                            boxShadow: "-5em -2em 1em rgba(0,0,0,0.5)",
                            padding: ".75em",
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