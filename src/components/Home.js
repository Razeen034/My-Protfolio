import React, { useState } from 'react';
import { Box } from '@mui/material';
import Footer from './Footer';
import Contact from './ContactForm';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Navbar from './Navbar'; 
import About from './About';
import Welcome from './Welcome';
import 'aframe';

function Home() {
  const [activeSection, setActiveSection] = useState('home'); // Default section is 'home'

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;

      case 'skills':
        return <Skills />;

      case 'projects':
        return <Portfolio />;

      case 'contact':
        return <Contact />;

        default:
          return <Welcome />;
    }
  };

  return (
    <Box
      sx={{
        background: '#f9f9fc',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
        color: '#333',
        paddingTop: '70px', // Adjusted to match navbar height
      }}
    >
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Dynamic Content */}
      <Box
        sx={{
          marginTop: '10px', // Removes the gap below the navbar
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {renderContent()}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Home;
