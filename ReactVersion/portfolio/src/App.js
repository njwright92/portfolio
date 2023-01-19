import nys from './images/nys.gif'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Interests from './pages/Interests';
import { Col, Container, Row } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col sm="3" md="5">
            <header className="App-header">
              <img src={nys} className="App-logo img-fluid img-thumbnail" alt="logo" />
              <p><br /><br />
                Nate Dogg
              </p>

            </header>
          </Col>
          <Col md='7'>
            <Interests />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
