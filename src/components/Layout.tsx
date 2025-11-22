import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, CssBaseline } from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My App
                    </Typography>
                    <Button color="inherit" component={RouterLink} to="/hello">
                        Hello World
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/about">
                        About
                    </Button>
                </Toolbar>
            </AppBar>
            <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
                <Outlet />
            </Container>
        </Box>
    );
};

export default Layout;
