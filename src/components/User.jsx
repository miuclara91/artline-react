import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Button, Tooltip, IconButton, Fab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Tema from "../helpers/Tema";

const Guestuser = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Container className="container">
                <Box sx={{ height: 440, width: 1450 }} className="header__box"></Box>

                aqui puedo pubicar, a mostrar mi foto de usuario, ¿Inspirate! usuario'
                es decir llamar a componente new post

                <Box textAlign="end">
                    <Fab color="primary" aria-label="Deslice">
                        <Tooltip title={<Typography fontSize={14}>Desliza para ver las publicaciones en artline</Typography>} arrow placement="left" open="true" sx={{ fontSize: '18' }}>
                            <IconButton>
                                <ExpandMoreIcon htmlColor="white" />
                            </IconButton>
                        </Tooltip>
                    </Fab>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Guestuser;
