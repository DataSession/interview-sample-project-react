import React from 'react';
import { Typography, Container, Box, Paper, List, ListItem, ListItemText, Divider, Link } from '@mui/material';

const About: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, my: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    React + TypeScript + Vite
                </Typography>

                <Typography variant="body1" paragraph>
                    This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
                </Typography>

                <Box sx={{ my: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Official Plugins
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Link href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react" target="_blank" rel="noopener">
                                        @vitejs/plugin-react
                                    </Link>
                                }
                                secondary="Uses Babel (or oxc) for Fast Refresh"
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem>
                            <ListItemText
                                primary={
                                    <Link href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc" target="_blank" rel="noopener">
                                        @vitejs/plugin-react-swc
                                    </Link>
                                }
                                secondary="Uses SWC for Fast Refresh"
                            />
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{ my: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        React Compiler
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The React Compiler is not enabled on this template because of its impact on dev & build performances.
                        To add it, see <Link href="https://react.dev/learn/react-compiler/installation" target="_blank" rel="noopener">this documentation</Link>.
                    </Typography>
                </Box>

                <Box sx={{ my: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        ESLint Configuration
                    </Typography>
                    <Typography variant="body1" paragraph>
                        For production applications, we recommend updating the configuration to enable type-aware lint rules.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default About;
