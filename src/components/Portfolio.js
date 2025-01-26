import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, CardActions } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A responsive portfolio built with React and Material UI to showcase my skills and projects.',
    technologies: ['React', 'Material UI', 'CSS'],
    liveDemo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/your-repo-link',
    architecture: (
      <Box sx={{ textAlign: 'center', color: '#007bff' }}>
        <Typography variant="body1">React (Frontend) → Node.js (API) → MongoDB (Database)</Typography>
      </Box>
    ),
  },
  {
    title: 'E-commerce Store',
    description: 'A full-stack e-commerce application with product listings, cart, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveDemo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/your-repo-link',
    architecture: (
      <Box sx={{ textAlign: 'center', color: '#007bff' }}>
        <Typography variant="body1">Frontend (React) → Backend (Express) → Database (MongoDB)</Typography>
        <Typography sx={{ marginTop: 2 }}>Payment Gateway Integration with Stripe</Typography>
      </Box>
    ),
  },
  {
    title: 'Weather App',
    description: 'A weather forecasting app that uses OpenWeatherMap API to display real-time weather data.',
    technologies: ['React', 'API Integration', 'CSS'],
    liveDemo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/your-repo-link',
    architecture: (
      <Box sx={{ textAlign: 'center', color: '#007bff' }}>
        <Typography variant="body1">Frontend (React) → OpenWeatherMap API</Typography>
        <Typography sx={{ marginTop: 2 }}>Real-time Data Fetching</Typography>
      </Box>
    ),
  },
  {
    title: 'Task Management System',
    description: 'A task management tool for teams with Kanban board functionality and notifications.',
    technologies: ['React', 'Redux', 'Node.js', 'Socket.IO'],
    liveDemo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/your-repo-link',
    architecture: (
      <Box sx={{ textAlign: 'center', color: '#007bff' }}>
        <Typography variant="body1">
          React (Frontend) → Node.js (API) → WebSockets (Real-time Notifications) → MongoDB (Database)
        </Typography>
      </Box>
    ),
  },
  {
    title: 'Blog Platform',
    description: 'A blog platform with user authentication, post creation, and commenting.',
    technologies: ['Django', 'React', 'PostgreSQL'],
    liveDemo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/your-repo-link',
    architecture: (
      <Box sx={{ textAlign: 'center', color: '#007bff' }}>
        <Typography variant="body1">
          React (Frontend) → Django REST Framework (Backend) → PostgreSQL (Database)
        </Typography>
        <Typography sx={{ marginTop: 2 }}>User Authentication with JWT</Typography>
      </Box>
    ),
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application with user authentication and group chat functionality.',
    technologies: ['React', 'Firebase'],
    liveDemo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/your-repo-link',
    architecture: (
      <Box sx={{ textAlign: 'center', color: '#007bff' }}>
        <Typography variant="body1">React (Frontend) → Firebase (Auth & Database)</Typography>
        <Typography sx={{ marginTop: 2 }}>Real-time Communication with Firestore</Typography>
      </Box>
    ),
  },
  {
    title: 'Finance Tracker',
    description: 'An application to manage personal finances with graphs and insights.',
    technologies: ['React', 'Node.js', 'D3.js', 'MySQL'],
    liveDemo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/your-repo-link',
    architecture: (
      <Box sx={{ textAlign: 'center', color: '#007bff' }}>
        <Typography variant="body1">
          React (Frontend) → Node.js (Backend) → D3.js (Visualization) → MySQL (Database)
        </Typography>
      </Box>
    ),
  },
];

function Portfolio() {
  const [viewMode, setViewMode] = useState(Array(projects.length).fill('description')); // Updated to handle all projects

  const toggleView = (index) => {
    setViewMode((prev) =>
      prev.map((view, idx) => (idx === index ? (view === 'description' ? 'architecture' : 'description') : view))
    );
  };

  return (
    <Box
      sx={{
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        minHeight: '100vh',
        color: '#f3f4f6',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#60a5fa', textAlign: 'center', marginBottom: '20px' }}
      >
        My Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  backgroundColor: '#1e293b',
                  color: '#f3f4f6',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#60a5fa' }}>
                    {project.title}
                  </Typography>
                  {viewMode[index] === 'description' ? (
                    <>
                      <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                        {project.description}
                      </Typography>
                      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        {project.technologies.join(', ')}
                      </Typography>
                    </>
                  ) : (
                    project.architecture
                  )}
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', padding: '0 16px 16px' }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#2563eb',
                      '&:hover': { backgroundColor: '#1d4ed8' },
                    }}
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: '#2563eb',
                      borderColor: '#2563eb',
                      '&:hover': { borderColor: '#1d4ed8', color: '#1d4ed8' },
                    }}
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    onClick={() => toggleView(index)}
                    sx={{
                      color: '#60a5fa',
                      '&:hover': { color: '#38bdf8' },
                    }}
                  >
                    {viewMode[index] === 'description' ? 'View Architecture' : 'View Description'}
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;
