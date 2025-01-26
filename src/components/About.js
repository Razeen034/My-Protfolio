import React from 'react';
import { Box, Typography, Grid, Avatar, Divider } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f0f4f8, #d9e4ec)', // Subtle gradient
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        <Grid container>
          {/* Left Section - Technical Details */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: '30px',
              background: 'linear-gradient(135deg, #003f7d, #0056b3)', // Theme blue gradient
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            <Avatar
              src="/path-to-your-avatar.jpg" // Replace with your avatar image path
              sx={{
                width: 120,
                height: 120,
                margin: '0 auto 15px',
                border: '4px solid #ffffff',
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                marginBottom: '15px',
              }}
            >
              Rajin Panthee
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              Full-Stack Developer with expertise in Java, Spring Boot, AWS, and modern front-end
              frameworks like React. Passionate about creating scalable and impactful solutions.
            </Typography>

            <Divider sx={{ backgroundColor: '#ffffff', margin: '20px 0' }} />

            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', marginBottom: '15px' }}
            >
              Technical Expertise
            </Typography>
            <Box sx={{ textAlign: 'left', marginLeft: '10%' }}>
              <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                <strong>Languages:</strong> Java, Python, C++, JavaScript, HTML, CSS
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                <strong>Frameworks:</strong> Spring Boot, React, Angular, Node.js
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                <strong>Databases:</strong> Oracle, MySQL, MongoDB, Cassandra
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                <strong>Tools:</strong> Docker, Jenkins, Git, JIRA, Maven
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                <strong>Cloud:</strong> AWS (EC2, S3, IAM), Azure
              </Typography>
              <Typography variant="body2">
                <strong>Testing:</strong> JUnit, Mockito, SonarQube
              </Typography>
            </Box>
          </Grid>

          {/* Right Section - Interests */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: '30px',
              backgroundColor: '#f8f9fa', // Subtle light gray background
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#003f7d',
              }}
            >
              My Interests
            </Typography>

            {/* Interest Sections */}
            <Box sx={{ marginBottom: '20px' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#0056b3',
                  marginBottom: '10px',
                }}
              >
                Travel
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  lineHeight: 1.6,
                }}
              >
                Exploring new places inspires creativity and broadens my perspective. From bustling
                cities to serene landscapes, every journey fuels my passion for discovery.
              </Typography>
            </Box>

            <Divider sx={{ margin: '20px 0' }} />

            <Box sx={{ marginBottom: '20px' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#0056b3',
                  marginBottom: '10px',
                }}
              >
                Liverpool FC
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  lineHeight: 1.6,
                }}
              >
                An ardent Liverpool FC fan, living by the mantra of "You'll Never Walk Alone."
                Football is more than a game; it’s a way of life.
              </Typography>
            </Box>

            <Divider sx={{ margin: '20px 0' }} />

            <Box sx={{ marginBottom: '20px' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#0056b3',
                  marginBottom: '10px',
                }}
              >
                Nepali Cricket
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  lineHeight: 1.6,
                }}
              >
                Proud to support Nepali cricket on its journey to global recognition. It’s inspiring
                to see the sport unite and uplift communities.
              </Typography>
            </Box>

            <Divider sx={{ margin: '20px 0' }} />

            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#0056b3',
                  marginBottom: '10px',
                }}
              >
                Chess
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  lineHeight: 1.6,
                }}
              >
                Chess hones my strategic thinking and problem-solving skills. I enjoy the art of
                planning moves and anticipating challenges on the board.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
