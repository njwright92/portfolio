import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';
import InterestsPage from './pages/InterestsPage';
import AboutPage from './pages/AboutPage';



function App() {
  return (
    <div className="App">
      <div className='anim_gradient'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='interests' element={<InterestsPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
