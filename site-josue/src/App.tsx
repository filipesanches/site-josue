import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box sx={{ padding: { lg: '0 50px' } }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<>sdsdsds</>} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<>sdsdsdsd</>} />
          <Route path="/subcontractors" element={<>sdsdsd</>} />
          <Route path="/contact" element={<>sdsdsd</>} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;