import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'React.js',
    icon: '⚛️',
    description: 'Build dynamic and responsive UIs.',
    projects: [
      { title: 'React Portfolio', link: 'https://github.com/your-repo/react-portfolio' },
      { title: 'E-commerce App', link: 'https://github.com/your-repo/e-commerce-app' },
    ],
  },
  {
    name: 'Node.js',
    icon: '🌲',
    description: 'Server-side JavaScript environment.',
    projects: [
      { title: 'API Backend', link: 'https://github.com/your-repo/api-backend' },
    ],
  },
  {
    name: 'JavaScript',
    icon: '📜',
    description: 'Powerful scripting language for the web.',
    projects: [
      { title: 'Interactive Game', link: 'https://github.com/your-repo/interactive-game' },
    ],
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'Versatile language for data and AI.',
    projects: [
      { title: 'Data Analysis', link: 'https://github.com/your-repo/data-analysis' },
    ],
  },
  {
    name: 'CSS & HTML',
    icon: '🎨',
    description: 'Styling and structuring the web.',
    projects: [
      { title: 'Landing Page', link: 'https://github.com/your-repo/landing-page' },
    ],
  },
  {
    name: 'AWS',
    icon: '☁️',
    description: 'Cloud services for scalable applications.',
    projects: [
      { title: 'AWS Deployment', link: 'https://github.com/your-repo/aws-deployment' },
    ],
  },
  {
    name: 'Java Spring Boot',
    icon: '☕',
    description: 'Powerful framework for building Java-based APIs and microservices.',
    projects: [
      { title: 'Microservice Architecture', link: 'https://github.com/your-repo/microservice-architecture' },
    ],
  },
];

const Skills = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index); // Toggle flip
  };

  return (
    <Box
      sx={{
        padding: '40px 20px',
        backgroundColor: '#f9f9fc',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#007bff',
          textAlign: 'center',
        }}
      >
        My Skills
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '40px',
          color: '#555',
          lineHeight: 1.8,
        }}
      >
        Click on a skill card to flip and see related projects or links showcasing my work.
      </Typography>

      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleFlip(index)}
              style={{
                perspective: '1000px', // Enable 3D perspective
                cursor: 'pointer',
              }}
            >
              <Card
                sx={{
                  transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  textAlign: 'center',
                  borderRadius: '12px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff',
                  height: '220px',
                  position: 'relative',
                }}
              >
                {/* Front Side */}
                <CardContent
                  sx={{
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: flippedIndex === index ? 'none' : 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '40px',
                      color: '#007bff',
                      marginBottom: '10px',
                    }}
                  >
                    {skill.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#333',
                      marginBottom: '10px',
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontSize: '14px',
                      lineHeight: 1.6,
                    }}
                  >
                    {skill.description}
                  </Typography>
                </CardContent>

                {/* Back Side */}
                <CardContent
                  sx={{
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    transform: 'rotateY(180deg)',
                    display: flippedIndex === index ? 'flex' : 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f3f4f6',
                    padding: '20px',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#007bff',
                      marginBottom: '10px',
                    }}
                  >
                    Related Projects
                  </Typography>
                  {skill.projects.map((project, idx) => (
                    <Button
                      key={idx}
                      variant="outlined"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        marginBottom: '10px',
                        textTransform: 'none',
                        color: '#007bff',
                        borderColor: '#007bff',
                        '&:hover': {
                          borderColor: '#0056b3',
                          color: '#0056b3',
                        },
                      }}
                    >
                      {project.title}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
