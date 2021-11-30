import React from 'react';
import { Box, Typography, Container, Tooltip, IconButton, Fab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "../assets/coloredLogo.png";

import Tema from "../helpers/Tema";

const Guestuser = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Container className="container">
                <Box className="header__box" textAlign="center">
                    <img src={Logo} alt="Logo" className="logo" />
                    <Typography variant="h4" pt={7}>
                        Welcome to Artline! The best platform for artist growth and community!
                    </Typography>
                    <Typography variant="h4" >
                        Join us on the other side!
                    </Typography>
                </Box>

                aqui puedo pubicar, a mostrar mi foto de usuario, ¿Inspirate! usuario'
                es decir llamar a componente new post

                <Box textAlign="end" pr={1}>
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
