import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import About from './components/Pages/About';
import Box from '@mui/material/Box';
import Phone_btn from './components/Phone_btn';
import Projects from './components/Pages/Projects';
import Subcontractor from './components/Pages/Subcontractor';
import Contact from './components/Pages/Contact';
import { Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box sx={{ textAlign: 'center', margin: '170px 0 100px 0' }}>
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography variant="body1">Oops! The page you're looking for doesn't exist.</Typography>
    </Box>
  );
};

const App = () => {
  return (<Router>
    <Navbar />
    <Box sx={{ padding: { lg: '0 50px' }, marginTop: '150px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/subcontractors" element={<Subcontractor />} />
        <Route path="/contact" element={<Contact />} />
        {/* Rota de erro 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Box>
    <Phone_btn />
    <Footer />
  </Router>

  );
};

export default App;
