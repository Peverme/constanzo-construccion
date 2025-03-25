import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Services from './components/Services/services.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <AboutUs/>
        <Services/>
        <Gallery/>
        <Footer/>

      </Router>

    </div>
  );
}

export default App;
