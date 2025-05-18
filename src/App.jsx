import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index';
import About from './pages/About';
import DomesticLogistics from './pages/DomesticLogistics';
import AirFreight from './pages/AirFreight';
import SeaFreight from './pages/SeaFreight';
import Contact from './pages/Contact';
import TrackShipment from './pages/TrackShipment';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/domestic-logistics" element={<DomesticLogistics />} />
        <Route path="/air-freight" element={<AirFreight />} />
        <Route path="/sea-freight" element={<SeaFreight />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/track-shipment" element={<TrackShipment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
