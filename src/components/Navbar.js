import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#003f7d', // Darker blue inspired by the technical section
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Brand Section */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#ffffff', // Bright white for high contrast
            letterSpacing: '1px',
            marginBottom: '5px',
          }}
        >
          Rajin Panthee
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#dbeafe', // Soft blue-gray for subtitle
            fontSize: '16px',
            fontStyle: 'italic',
          }}
        >
          Full-Stack Developer
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box sx={{ display: 'flex', gap: '20px' }}>
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
          <Button
            key={section}
            sx={{
              fontWeight: activeSection === section.toLowerCase() ? 'bold' : 'normal',
              color: activeSection === section.toLowerCase() ? '#ffffff' : '#a7c7f2', // Highlight active section
              fontSize: '16px',
              textTransform: 'capitalize',
              transition: 'color 0.3s ease, transform 0.2s ease',
              '&:hover': { color: '#e2e8f0', transform: 'scale(1.1)' }, // Subtle hover animation
            }}
            onClick={() => setActiveSection(section.toLowerCase())}
          >
            {section}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
