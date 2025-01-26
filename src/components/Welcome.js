import React from 'react';
import { Box, Typography, Grid, Avatar, Divider } from '@mui/material';

const Welcome = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #eef2f3, #dfe4ea)', // Neutral gradient
        padding: '40px 20px',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
        }}
      >
        <Grid container>
          {/* Left Section - Introduction */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              background: 'linear-gradient(135deg, #004C8C, #0056b3)', // Professional blue theme
              color: '#ffffff',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src="/path-to-avatar.jpg" // Replace with your avatar image path
              sx={{
                width: 150,
                height: 150,
                marginBottom: '20px',
                border: '4px solid #ffffff',
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              Welcome!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              I’m Rajin Panthee, a passionate Full-Stack Developer with a knack for building
              efficient and impactful software solutions. Let’s embark on a journey of
              creativity and innovation!
            </Typography>
          </Grid>

          {/* Right Section - Highlights */}
          <Grid item xs={12} md={6} sx={{ padding: '40px', backgroundColor: '#f8f9fa' }}>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#004C8C',
              }}
            >
              Highlights
            </Typography>
            <Box sx={{ marginBottom: '20px' }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '10px' }}
              >
                Expertise in Development
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
                Proficient in Java, Spring Boot, AWS, React, and more. Building scalable,
                secure, and user-centric applications is my forte.
              </Typography>
            </Box>
            <Divider sx={{ margin: '20px 0' }} />
            <Box sx={{ marginBottom: '20px' }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '10px' }}
              >
                Collaboration & Problem Solving
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
                I thrive in collaborative environments and excel at delivering solutions to
                complex technical challenges.
              </Typography>
            </Box>
            <Divider sx={{ margin: '20px 0' }} />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '10px' }}
              >
                Driven by Curiosity
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
                With a mindset of continuous learning, I stay ahead in technology trends,
                always aiming to refine and expand my skills.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Welcome;
