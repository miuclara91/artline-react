import { ThemeProvider } from '@emotion/react';
import { Container, Box } from '@mui/material';
import React from 'react';
import Tema from "../helpers/Tema";

const Postvacio = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#FE4164', height: '60vh' }} />
            </Container>
        </ThemeProvider>
    );
}

export default Postvacio;
