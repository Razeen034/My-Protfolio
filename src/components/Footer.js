import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        padding: '10px 20px', // Matches navbar height
        textAlign: 'center',
        position: 'fixed', // Fixes footer to the bottom
        bottom: 0, // Sticks to the bottom of the screen
        width: '100%', // Ensures it spans the full width
        zIndex: 1000, // Ensures it appears above other content
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', // Vertically centers the content
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow effect
      }}
    >
      {/* Left Section - Footer Text */}
      <Typography
        variant="body2"
        sx={{
          color: '#8892b0',
          fontSize: '12px',
        }}
      >
        © {new Date().getFullYear()} Rajin Panthee
      </Typography>

      {/* Center Section - Social Icons */}
      <Box>
        <IconButton
          href="mailto:rajin@example.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#ccd6f6', fontSize: 'small' }}
        >
          <Email />
        </IconButton>
        <IconButton
          href="https://github.com/rajinpanthee"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#ccd6f6', fontSize: 'small' }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/rajinpanthee/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#ccd6f6', fontSize: 'small' }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="https://twitter.com/your-twitter-handle"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#ccd6f6', fontSize: 'small' }}
        >
          <Twitter />
        </IconButton>
      </Box>

      {/* Right Section - Built With Text */}
      <Typography
        variant="body2"
        sx={{
          color: '#8892b0',
          fontSize: '12px',
        }}
      >
        Built with 💙 using React & Material-UI
      </Typography>
    </Box>
  );
}

export default Footer;
