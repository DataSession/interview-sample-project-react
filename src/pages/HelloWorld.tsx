import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const HelloWorld: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hello World
        </Typography>
        <Typography variant="body1">
          Welcome to the application!
        </Typography>
      </Box>
    </Container>
  );
};

export default HelloWorld;
