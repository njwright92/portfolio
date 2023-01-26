import nys from './img/nys.gif'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';
import Interests from './pages/Interests';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="App-header">
        <img src={nys} className="App-logo img-fluid img-thumbnail" alt="logo" />
      </Container>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Interests' element={<Interests />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
