import React from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';

function Contact() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f9f9fc',
        borderRadius: '12px',
        padding: '40px 20px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        margin: '0 auto',
        minHeight: 'calc(100vh - 140px)', // Subtracting navbar and padding heights
        maxWidth: '1200px',
        paddingTop: '140px', // Align with fixed navbar
        boxSizing: 'border-box',
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section - Contact Info */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              padding: '20px',
              textAlign: 'center',
              borderRight: { md: '1px solid #ddd' }, // Divider for larger screens
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#007bff' }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: '30px', color: '#555', lineHeight: 1.8 }}
            >
              Reach out to me via email or social media, or use the provided form to send a message.
            </Typography>

            <Button
              variant="outlined"
              href="mailto:your-email@example.com"
              sx={{
                width: '100%',
                maxWidth: '400px',
                textTransform: 'none',
                color: '#007bff',
                borderColor: '#007bff',
                '&:hover': {
                  borderColor: '#0056b3',
                  color: '#0056b3',
                },
              }}
            >
              📧 your-email@example.com
            </Button>
            <Button
              variant="outlined"
              href="https://linkedin.com/in/your-linkedin-profile"
              target="_blank"
              sx={{
                width: '100%',
                maxWidth: '400px',
                textTransform: 'none',
                color: '#007bff',
                borderColor: '#007bff',
                '&:hover': {
                  borderColor: '#0056b3',
                  color: '#0056b3',
                },
              }}
            >
              🔗 LinkedIn Profile
            </Button>
            <Button
              variant="outlined"
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              sx={{
                width: '100%',
                maxWidth: '400px',
                textTransform: 'none',
                color: '#007bff',
                borderColor: '#007bff',
                '&:hover': {
                  borderColor: '#0056b3',
                  color: '#0056b3',
                },
              }}
            >
              🐦 @your-twitter-handle
            </Button>
          </Box>
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: '20px' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                marginBottom: '20px',
                textAlign: 'center',
                color: '#007bff',
              }}
            >
              Send Me a Message
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': { borderColor: '#007bff' },
                        '&.Mui-focused fieldset': { borderColor: '#007bff' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    type="email"
                    variant="outlined"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': { borderColor: '#007bff' },
                        '&.Mui-focused fieldset': { borderColor: '#007bff' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': { borderColor: '#007bff' },
                        '&.Mui-focused fieldset': { borderColor: '#007bff' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{
                      backgroundColor: '#007bff',
                      color: '#ffffff',
                      '&:hover': { backgroundColor: '#0056b3' },
                      width: '100%',
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
