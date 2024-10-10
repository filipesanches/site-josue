import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import About from './components/Pages/About';
import Box from '@mui/material/Box';
import Phone_btn from './components/Phone_btn';
import Projects from './components/Pages/Projects';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box sx={{ padding: { lg: '0 50px' }, marginTop: '200px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/subcontractors" element={<>sdsdsd</>} />
          <Route path="/contact" element={<>sdsdsd</>} />
        </Routes>
      </Box>
      <Phone_btn />
      <Footer />
    </Router>
  );
};

export default App;
