import nys from './images/nys.gif'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={nys} className="App-logo" alt="logo" />
        <p><br /><br />
          Nate Dogg
        </p>
        <p>My first site</p>
        <a
          className="App-link"
          href="https://slapshot16.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slapshot16.com
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
