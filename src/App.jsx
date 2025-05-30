import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index';
import About from './pages/About';
import DomesticLogistics from './pages/DomesticLogistics';
import AirFreight from './pages/AirFreight';
import SeaFreight from './pages/SeaFreight';
import Contact from './pages/Contact';
import TrackShipment from './pages/TrackShipment';
import ParcelDocumentShipping from './pages/ParcelDocumentShipping';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
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
        <Route path="/parcel-document-shipping" element={<ParcelDocumentShipping />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
