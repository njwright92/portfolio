import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';
import Interests from './pages/Interests';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='interests' element={<Interests />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer style={{ backgroundColor: 'white' }} />
    </div>
  );
}

export default App;
