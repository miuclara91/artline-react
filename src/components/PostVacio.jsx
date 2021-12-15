import { ThemeProvider } from '@emotion/react';
import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import Tema from "../helpers/Tema";

const Postvacio = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#FE4164', height: '60vh' }} mt={2} mb={2}>
                    <Typography variant="h1" component="h2" color="white">
                        Lo sentimos
                    </Typography>
                    <Typography color="white">
                        por el momento no tenemos información
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Postvacio;
